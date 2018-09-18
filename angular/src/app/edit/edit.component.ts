import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    authorId;
    selectedAuthor;
    updatedAuthor = { name: "" };
    inputError;

    constructor(private _httpService: HttpService,
                private _router: Router,
                private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.authorId = params["id"];
            console.log("Current author's id:", params.id);
        })
        this.getAuthor(this.authorId);
    }

    goHome() {
        this._router.navigate(['/']);
    }

    getAuthor(id){
        let obs = this.selectedAuthor = this._httpService.getAuthor(this.authorId);
        obs.subscribe(author => {
            console.log("Current author:", author);
            this.selectedAuthor = author;
        })
    }

    updateAuthor() {
        let updatedAuthor = this._httpService.updateAuthor(this.authorId, this.updatedAuthor);
        updatedAuthor.subscribe(author => {
            console.log("What is author:", author)
            if (author['errors']) {
                console.log("Service failed to update author", author['errors']);
                this.inputError = author['errors'];
            } else {
                console.log("Service updated author!", updatedAuthor);
            }
        });
        this.goHome();
    }
}
