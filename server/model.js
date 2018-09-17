// import and connect model with mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authorDB', {useNewUrlParser: true}, errs => console.log(errs?errs:"run db"));

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Author name too short"]
    }
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);
module.exports = {Author}