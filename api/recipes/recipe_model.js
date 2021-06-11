const db = require('../../data/db-config')


async function getRecipeById(recipe_id) { 
  const findRecipe = await db('recipes as re')
  .select('re.recipe_name', 'st.*', 're.recipe_id')
  .leftJoin('steps as st', 're.recipe_id', '=', 'st.recipe_id')
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
