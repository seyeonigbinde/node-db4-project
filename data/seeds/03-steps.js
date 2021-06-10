
exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
      { step_number: '1', step_instruction:'wash the rice', recipe_id: '1'},
      { step_number: '2', step_instruction:'add some salt and pepper', recipe_id: '1'}
    ]);
  };
  