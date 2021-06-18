const express = require('express');
const router = require('./recipes/recipe_router');

const server = express();

server.use(express.json());
server.use('/api', router);

server.get("/:recipe_id", (req, res) => {
  res.status(200).json({ recipe_id: 1, recipe_name: "Ofada Rice"});
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
