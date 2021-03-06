exports.up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments("id");
    table.integer("photo_id").unsigned().notNullable();
    table.integer("user_id").unsigned().notNullable();
    table.string("body").notNullable();

    table.foreign("photo_id").references("photos.id").onDelete("CASCADE");
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
