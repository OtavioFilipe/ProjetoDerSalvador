const { request } = require("express");
const Books = require("../app/models/book");
const { search } = require("../routes");
module.exports = {

    async index(request, response) {
        try {
            const books = await Books.find();
            return response.send(books);
        } catch (error) {
            return response.send("Books not found");
        }
    },

    async searchByAuthor(request, response) {
        try {
            const data = request.body
            const books = await Books.findOne({ author: data.author });
            return response.send(books);
        } catch (error) {
            return response.send("Books not found")
        }
    },

    async searchByTitle(request, response) {
        try {
            const data = request.body
            const resultOfDatabase = await Books.findOne({ title: data.title });
            return response.send(resultOfDatabase);
        } catch (error) {
            return response.send("Title not found");
        }
    },

    async searchByTopic(request, response) {
        try {
            const data = request.body
            const resultOfTopic = await Books.findOne({ topic: data.topic });
            return response.send(resultOfTopic);
        } catch (error) {
            return response.send("Title not found");
        }
    },

    async createBooks(request, response) {
        try {
            const data = request.body//o que veio do front|json enviado do front para o back end| recebe como parametro o corpo do objeto|
            const books = await Books.create({
                content: data.content,
                title: data.title,
                author: data.author,
                topic: data.topic,
                status: data.status
            })
            return response.send(books);
        } catch (error) {
            return response.send("Database not found");
        }
    },

     async statusUpdate(request, response) {
      try {
         const {_id, status} = request.body;//desestruturando o json recebido!.findByIdAndUpdate(req.params.projetoId, //{title, description}, { new: true }); // o New: true, faz com que o mongoo se retorne o valor atualizado.
         const data = await Books.findByIdAndUpdate(_id, {status: status}, {new: true});
         return response.send(data);
      } catch (error) {
          return response.send("Status unavailable");                                                                                                   
      }  
    }
};