/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('accounts', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .notNull()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('accounts');
};
