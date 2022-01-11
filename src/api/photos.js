const express = require("express");
const router = express.Router();
const Photo = require("../db/Photo.js");
const { v4: uuidv4 } = require("uuid");
const Validator = require("jsonschema").Validator;
const validator = new Validator();
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
  endpoint: process.env.S3_ENDPOINT,
});

const photoSchema = {
  id: "/Photo",
  type: "object",
  properties: {
    path: { type: "text" },
    body: { type: "text" },
  },
  required: ["path", "body"],
};

const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.all();
    res.status(200).send(photos);
  } catch (error) {
    return res.status(400).send(error);
  }
};

/**
 * Get all photos.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const getPhoto = async (req, res) => {
  try {
    const photos = await Photo.findById(req.params.photoId);
    res.status(200).send(photos);
  } catch (error) {
    return res.status(400).send(error);
  }
};

/**
 * Generate a pre-signed S3 URL where front-end will upload images.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getPresignedUrl = async (req, res) => {
  const S3Bucket = new AWS.S3({
    signatureVersion: "v4",
    params: { Bucket: process.env.S3_BUCKET },
  });

  const fileData = {
    name: uuidv4() + ".jpg",
    type: "image/jpeg",
  };

  const params = {
    Bucket: process.env.S3_BUCKET,
    Fields: {
      Key: `images/${fileData.name}`,
      acl: "public-read",
    },
    Expires: 15 * 60, // 15 minutes
    ContentType: fileData.type,
  };

  S3Bucket.createPresignedPost(params, (err, data) => {
    if (err) res.status(400).send(err);
    res.status(200).send({ ...data });
  });
};

/**
 * Store new photo to database.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const postNewPhoto = async (req, res) => {
  try {
    const request = req.body;
    const validation = validator.validate(request, photoSchema);

    // validate against photoSchema
    if (validation.errors.length > 0) {
      res.status(400).send(validation.errors);
    } else {
      // save photo to db
      const photo = await Photo.save({
        path: request.path,
        body: request.body,
        is_visible: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      res.status(201).send(photo);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

// register routes
router.get("/", getPhotos);
router.get("/presigned-url", getPresignedUrl);
router.get("/:photoId", getPhoto);
router.post("/", postNewPhoto);

module.exports = router;
