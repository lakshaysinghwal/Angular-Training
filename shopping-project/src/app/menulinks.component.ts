// Define Two components in this file
import {Component} from "@angular/core"

@Component({
    selector: "app-home",
    template: `<h1>Welcome to My Angular Shopping Application</h1>
    <app-shopping-list></app-shopping-list>`
})

export class HomeComponent {

}

@Component({
    selector: "not-found",
    template: `<h1 style="color: red;"> 404. No Resource found. </h1>`

})

export class NotFoundComponent {}