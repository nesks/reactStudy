const express = require("express");
const connection = require("./database/connection");
const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");
const ProfileController = require("./controller/ProfileController");

const routes = express.Router();

routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.create )

routes.get('/profile', ProfileController.list )

routes.delete('/incidents/:id', IncidentController.delete)
routes.get('/incidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)


module.exports = routes;