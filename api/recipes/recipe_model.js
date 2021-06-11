const db = require('../../data/db-config')


async function getRecipeById(recipe_id) { 
  const findRecipe = await db('recipes as re')
  .select('re.recipe_name', 'st.*', 're.recipe_id', 
  'si.ingredient_id','i.ingredient_id', 'i.ingredient_name', 'si.quantity')
  .leftJoin('steps as st', 're.recipe_id', '=', 'st.recipe_id')
  .leftJoin('steps_ingredients as si', 'si.step_id', '=', 'st.step_id')
  .leftJoin('ingredients as i', 'si.ingredient_id', '=', 'i.ingredient_id')
  .where ('re.recipe_id', recipe_id)
  .orderBy('st.step_number', 'asc')

  const transformed ={
    recipe_id: findRecipe[0].recipe_id,
    recipe_name: findRecipe[0].recipe_name,
    created_at: findRecipe[0].created_at,
    steps: []
  }

  findRecipe.forEach(findRecipe => {
    if (findRecipe.step_id){
      transformed.steps.push({
        step_id: findRecipe.step_id,
        step_number: findRecipe.step_number,
        step_instruction: findRecipe.step_instruction,
        ingredients: findRecipe.ingredients,
      })
    }
  })

  return transformed
  
}

module.exports = {
  getRecipeById,
}
