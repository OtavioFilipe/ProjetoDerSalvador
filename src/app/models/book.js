const mongoose = require("../../database/index");

const bookSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    topic: {
        type: String,
        required: true

    },
    status: {
        type: String,
        required: true
    }
});

const Books = mongoose.model("Books", bookSchema);
//model é um método para criar, models baseados em um schema, armazenado em uma váriavel no banco mongodb
module.exports = Books;