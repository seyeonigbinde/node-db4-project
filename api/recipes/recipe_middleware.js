const Recipe = require('./recipe_model')
const db = require('../../data/db-config')

const checkRecipeId = async (req, res, next) => {
  try {
    const recipe = await db('recipes')
    .where('recipe_id', req.params.recipe_id).first()
    if(!recipe) {
      next({status: 404, 
        message: `recipe with recipe_id ${req.params.recipe_id} is not found`})
    } else {
      req.recipe = recipe
      next()
    }
  }catch(err) {
    next(err)
  }
}


module.exports = {
  checkRecipeId,
}
