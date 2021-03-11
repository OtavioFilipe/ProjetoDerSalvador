//aqui estou importando o express e outras bibliotecas
const express = require("express");
const routes = require("./routes/index.js");

const app = express();

//aqui está a configuração do express
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(routes);

require("./controllers/index");

app.get("/", (request, response) => {
    response.send("Server is running");
})

//aqui está servindo a API na porta específica
app.listen(3000, (request, response) => {
    console.log("Server is runnig!");
})