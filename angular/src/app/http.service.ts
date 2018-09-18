import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    
    constructor(private _http: HttpClient) { }

    showAuthors() {
        return this._http.get('/api/authors');
    }

    getAuthor(id) {
        return this._http.get('api/authors/'+id);
    }

    createAuthor(author) {
        return this._http.post('api/authors', author);
    }

    updateAuthor(id, newAuthor) {
        return this._http.put('api/authors/'+id, newAuthor);
    }

    deleteAuthor(id) {
        return this._http.delete('api/authors/'+id);
    }
}
