const express = require("express");
const bookController = require("../controllers/bookController");
const routes = express.Router()

routes.get("/getallbooks",  bookController.index);
routes.post("/addbook", bookController.createBooks);
routes.post("/getbookbyauthor", bookController.searchByAuthor);
routes.post("/getbookbytitle", bookController.searchByTitle);
routes.post("/getbookbytopic", bookController.searchByTopic);
routes.patch("/getstatusupdate", bookController.statusUpdate);
//put att varios campos da tabela|| patch apenas um campo em epecifico!
module.exports = routes;
