/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("perguntas", (table) =>{
        
        table.increments("id").primary().unique();
        table.string("titulo").notNullable();
        table.string("conteudo").notNullable();
        table.integer("usario_id").unsigned().references("id").inTable("usuario").onDelete("CASCADE")
    } )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("perguntas");
};
