const db = require('../data/db-config')
const Recipe = require('./recipes/recipe_model')

test('sanity', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('recipes').truncate()
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

  describe('getRecipeById', () => {
    test('returns recipe by the given id', async () => {
      const sam = await Recipe.getRecipeById(1)
      expect(sam).toMatchObject({ "recipe_id": 1, "recipe_name": "Ofada Rice"})
    })
  })
