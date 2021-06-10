
exports.seed = function(knex, Promise) {
    return knex('steps_ingredients').insert([   
      { step_id: '1', ingredient_id: '1', quantity: '5'},
      { step_id: '2', ingredient_id: '2',quantity: '2'}
    ]);
  };