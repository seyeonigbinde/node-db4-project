const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config')

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

test('sanity', () => {
  expect(true).toBeTruthy()
})

describe('[GET] /:recipe_id', () => {
  it('returns a status 200 OK', async () => {
    const res = await request(server).get('/:recipe_id')
    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({ recipe_id: 1, recipe_name: "Ofada Rice"})
  })
})
