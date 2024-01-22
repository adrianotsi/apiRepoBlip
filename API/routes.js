const express = require('express');
const getBlipRepoController = require('./controllers/getBlipRepo');

const routes = express.Router();

routes.get("/", (request, response) =>{
    return response.send("Oh... Hello World! How you doing?")
})

routes.get('/getRepos', getBlipRepoController.index);

module.exports = routes;