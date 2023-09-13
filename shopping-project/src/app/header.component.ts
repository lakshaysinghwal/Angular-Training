
import {Component} from "@angular/core"
@Component({
    selector: "app-header",
    // template: "Header Components below",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]

})
export class HeaderComponent {
    constructor() {
        console.log("Header component constructor")
    }
}