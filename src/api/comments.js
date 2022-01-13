const express = require("express");
const router = express.Router();
const Comment = require("../db/Comment.js");
const Validator = require("jsonschema").Validator;
const validator = new Validator();

const commentSchema = {
  id: "/Comment",
  type: "object",
  properties: {
    photo_id: { type: "integer", min: 1 },
    body: { type: "text" },
  },
  required: ["photo_id", "body"],
};

/**
 * Store a new comment to the database.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const postNewComment = async (req, res) => {
  try {
    const request = req.body;
    const validation = validator.validate(request, commentSchema);

    if (validation.errors.length > 0) {
      res.status(400).send(validation.errors);
    } else {
      const comment = await Comment.save({
        photo_id: request.photo_id,
        user_id: 1, // todo: use passportjs session
        body: request.body,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      console.log(comment);

      const commentWithUsername = await Comment.findById(comment.insertId);
      console.log(commentWithUsername);

      res.status(201).send(commentWithUsername);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

// register routes
router.post("/", postNewComment);

module.exports = router;
