const express = require("express");
const bookController = require("../controllers/bookController");
const routes = express.Router()

routes.post("/addbook", bookController.createBooks);
routes.get("/getallbooks",  bookController.index);
routes.post("/getbookbyauthor", bookController.searchByAuthor);
routes.post("/getbookbytitle", bookController.searchByTitle);

module.exports = routes;