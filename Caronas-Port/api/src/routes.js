const express = require('express');
const knex = require("./database");
const offerController = require("./controllers/offer");
const requestController = require("./controllers/request");
const searchController = require("./controllers/search");
const usersController = require("./controllers/users");
const loginController = require("./controllers/login");
const appRoutes = express.Router();

// ROTAS USERS
appRoutes.post("/users", usersController.create);
appRoutes.get("/users", usersController.getAll);
appRoutes.delete("/users/:id", usersController.delete);

//ROTAS REQUEST
appRoutes.post("/request", requestController.create);
appRoutes.get("/request", requestController.getAll);
appRoutes.put("/request/:id", requestController.put);
appRoutes.delete("request/:id", requestController.delete);


//ROTAS SEARCH
appRoutes.get("/search", searchController.getAll);

//ROTAS OFFER
appRoutes.post("/offer", offerController.create);
appRoutes.get("/offer", offerController.getAll);
appRoutes.put("/offer/:id", offerController.put);
appRoutes.delete("/offer/:id", offerController.delete);

// ROTAS LOGIN

appRoutes.post("/login", loginController.create);





module.exports = appRoutes;
