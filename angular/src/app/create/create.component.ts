import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    newAuthor = { name: "" }
    inputError;

    constructor(private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router) { }

    ngOnInit() {

    }

    goHome() {
        this._router.navigate(['/']);
    }

    createAuthor() {
        let newAuthor = this._httpService.createAuthor(this.newAuthor);
        newAuthor.subscribe((newAuthor: any) => {
            if (newAuthor.errors) {
                console.log("Service fail to add author", newAuthor.errors);
                this.inputError = newAuthor.errors; 
            } else {
                console.log("Service added new author!", newAuthor);
            }
        })
        this.newAuthor = { name: "" };
        this.goHome();
    }

}
