exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("username", 20).notNullable();
    table.string("first_name").nullable();
    table.string("last_name").nullable();
    table.string("bio").nullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
