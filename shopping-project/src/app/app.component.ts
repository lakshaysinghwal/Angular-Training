//Refer Component decorator

import {Component} from "@angular/core"
@Component({
    selector: "app-root",
    template: ` <!-- <h3> My Angular app component </h3> -->
    <app-header></app-header>
    <router-outlet></router-outlet>
    `
})

//Define component class

export class AppComponent {
    constructor() {
        console.log("App Component Constructor")
    }
}                                    