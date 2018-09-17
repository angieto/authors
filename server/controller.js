const {Author} = require('./model');

// export an object that contains logics
module.exports = {
    allAuthors: (req, res) => Author.find({})
                                    .then(authors => console.log("Backend returned authors", authors)||res.json(authors))
                                    .catch(err => console.log("Backend error", err)||res.json(err)),
    getAuthor: (req,res) => Author.findById(req.params.id)
                                  .then(author => console.log("Backend returned the author", author)||res.json(author))
                                  .catch(err => console.log("Backend error", err)||res.json(err)),
    createAuthor: (req, res) => Author.create(req.body)
                                      .then(author => console.log("Backend created new author", author)||res.json(author))
                                      .catch(err => console.log("Backend error", err)||res.json(err)),
    updateAuthor: (req, res) => Author.findByIdAndUpdate(req.params.id, req.body)
                                      .then(author => console.log("Backend updated author", author)||res.json(author))
                                      .catch(err => console.log("Backend error", err)||res.json(err)),
    deleteAuthor: (req, res) => Author.removeById(req.params.id)
                                      .then(author => console.log("Backend removed author", author))
                                      .catch(err => console.log("Backend error", err)||res.json(err))
}