
exports.up = function (knex) {
    return knex.schema
      .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 138).notNullable().unique()
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
      .createTable('steps', table => {
        table.increments('step_id')
        table.string('step_number', 138).notNullable()
        table.integer('step_instruction', 138).notNullable()
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
      })
      .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 138).notNullable()
      })
      .createTable('steps_ingredients', table => {
        table.increments('step_ingredient_id')
        table.integer('step_id')
          .unsigned()
          .notNullable()
          .references('step_id')
          .inTable('steps')
          .onDelete('RESTRICT')
        table.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('ingredient_id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
        table.integer('quantity', 138).notNullable()
      })
  };
  
  exports.down = function (knex) {
   
    return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps_ingredients')
  };
  