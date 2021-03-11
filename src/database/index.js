const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Otto:otto@cluster0.gwdft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;