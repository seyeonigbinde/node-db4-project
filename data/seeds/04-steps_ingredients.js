
exports.seed = function(knex, Promise) {
    return knex('steps_ingredients').insert([   
      { quantity: '5'},
      { quantity: '2'}
    ]);
  };