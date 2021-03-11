const express = require("express");
const bookController = require("../controllers/bookController");
const routes = express.Router()

routes.post("/api", bookController.createBooks);
// routes.put()
// routes.delete()
// routes.post()

module.exports = routes;