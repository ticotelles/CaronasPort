const express = require('express');
const knex = require("./database");
const offerController = require("./controllers/ride");
const requestController = require("./controllers/request");
const searchController = require("./controllers/search");
const usersController = require("./controllers/users");
const loginController = require("./controllers/login");
const appRoutes = express.Router();

// ROTAS USERS
appRoutes.post("/users", usersController.create);
appRoutes.get("/users", usersController.getAll);


//ROTAS REQUEST
appRoutes.post("/request", requestController.create);
appRoutes.get("/request", requestController.getAll);


//ROTAS SEARCH
appRoutes.get("/search", searchController.getAll);

//ROTAS OFFER
appRoutes.post("/offer", offerController.create);
appRoutes.get("/offer", offerController.getAll);


// ROTAS LOGIN

appRoutes.post("/login", loginController.create);





module.exports = appRoutes;
