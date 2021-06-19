const express = require('express')
const { checkRecipeId } = require('./recipe_middleware')
const Recipes = require('./recipe_model')

const router = express.Router()

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
  const { recipe_id } = req.params

  Recipes.getRecipeById(recipe_id)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(next)
})



module.exports = router
