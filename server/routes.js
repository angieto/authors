const api = require('./controller');
const bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    // routes
    app.get('/api/authors', api.allAuthors);
    app.get('/api/authors/:id', api.getAuthor);
    app.post('/api/authors', api.createAuthor);
    app.put('/api/authors/:id', api.updateAuthor);
    app.delete('/api/authors/:id', api.deleteAuthor);
}