const Books = require("../app/models/book");
module.exports = {
    async createBooks(request, response) {
        try {
            const data = request.body
            const books = await Books.create({
                content: data.content,
                title: data.title,
                author: data.author,
                topic: data.topic
            })
            return response.send(books);

        } catch (error) {
            return response.send("Error!")
        }
    }
}