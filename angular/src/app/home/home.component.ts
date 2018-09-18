import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    authors: any = [];
    selectedAuthor;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.showAuthors();
    }

    showAuthors() {
        let authors = this._httpService.showAuthors();
        authors.subscribe(authors => {
            console.log("Service got you authors:", authors);
            this.authors = authors;
        })
    }

    deleteAuthor(id) {
        let obs = this._httpService.deleteAuthor(id);
        obs.subscribe(deletedAuthor => {
            console.log("Author is deleted", deletedAuthor);
        })
        this.showAuthors();
    }
}
