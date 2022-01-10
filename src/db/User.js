const pool = require("../database");

module.exports = {
  /**
   * Fetch all users
   *
   * @returns {Promise<unknown>}
   */
  all: () => {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM users", (err, users) => {
        if (err) {
          return reject(err);
        }
        return resolve(users);
      });
    });
  },

  /**
   * Save a new user.
   *
   * @returns {Promise<unknown>}
   */
  save: async (location) => {
    pool.query(
      `INSERT INTO locations (latitude, longitude) VALUES ( ${location.latitude},  ${location.longitude})`,
      (err, results) => {
        if (err) {
          return Promise.reject(err);
        }
        return Promise.resolve(results);
      }
    );
  },

  /**
   * Delete user by id.
   * @param id
   * @returns {Promise<unknown>}
   */
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE FROM users WHERE id = ${pool.escape(id)}`,
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
   * Find user by id.
   * @param id
   * @returns {Promise<unknown>}
   */
  findById: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM users WHERE id = ${pool.escape(id)}`,
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
   * Find user by username.
   * @param username
   * @returns {Promise<unknown>}
   */
  findByUsername: (username) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM users WHERE username = ${pool.escape(username)} LIMIT 1`,
        (err, locations) => {
          if (err) {
            reject(err);
          }

          resolve({ ...locations[0] });
        }
      );
    });
  },
};
