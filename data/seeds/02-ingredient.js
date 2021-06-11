
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient_name: 'Palm Oil'},
      { ingredient_name: 'Salt'}
    ]);
  };
  