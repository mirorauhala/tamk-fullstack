exports.up = function (knex) {
  return knex.schema.createTable("photos", function (table) {
    table.increments("id");
    table.string("path").notNullable();
    table.string("body").nullable();
    table.datetime("is_visible").defaultTo(knex.fn.now());
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("photos");
};
