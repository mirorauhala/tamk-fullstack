const pool = require("../database");

module.exports = {
  /**
   * Fetch all photos in date order.
   * @returns {Promise<unknown>}
   */
  all: async () => {
    return new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM photos ORDER BY created_at DESC",
        (err, photos) => {
          if (err) {
            return reject(err);
          }
          return resolve(photos);
        }
      );
    });
  },

  /**
   * Save a new photo.
   * @param photo
   * @returns {Promise<unknown>}
   */
  save: (photo) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO photos (path, body, is_visible, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
        [
          photo.path,
          photo.body,
          photo.is_visible,
          photo.created_at,
          photo.updated_at,
        ],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },

  /**
   * Delete photo.
   * @param id
   * @returns {Promise<unknown>}
   */
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(`DELETE FROM photos WHERE id = ?`, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  },

  /**
   * Find photo by id.
   * @param id
   * @returns {Promise<unknown>}
   */
  findById: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM photos WHERE id = ?`,
        [id],
        (err, locations) => {
          if (err) {
            reject(err);
          }
          resolve(locations);
        }
      );
    });
  },

  /**
   * Find photo by id.
   * @param id
   * @returns {Promise<unknown>}
   */
  commentsForPost: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT
           comments.*,
           users.username
        FROM comments
        JOIN users  on comments.user_id = users.id
        WHERE photo_id = ?`,
        [id],
        (err, locations) => {
          if (err) {
            reject(err);
          }
          resolve(locations);
        }
      );
    });
  },
};
