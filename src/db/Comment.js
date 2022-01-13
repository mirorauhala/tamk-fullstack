const pool = require("../database");

module.exports = {
  /**
   * Get comment with username.
   *
   * @returns {Promise<unknown>}
   */
  findById: async (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM comments
         JOIN users u on comments.user_id = u.id
         WHERE comments.id = ?`,
        [id],
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
   * Create a new comment for a photo.
   *
   * @returns {Promise<unknown>}
   */
  save: async ({ photo_id, user_id, body, created_at, updated_at }) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO comments (photo_id, user_id, body, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
        [photo_id, user_id, body, created_at, updated_at],
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
   * Delete a comment by id.
   * @param id
   * @returns {Promise<unknown>}
   */
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(`DELETE FROM comments WHERE id = ?`, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  },
};
