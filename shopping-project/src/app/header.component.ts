
import {Component, inject} from "@angular/core"
import { AuthService } from "./services/auth.service"
@Component({
    selector: "app-header",
    // template: "Header Components below",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]

})
export class HeaderComponent {
    isAdminLoggedIn = false
    private authSvc = inject(AuthService)
    
    constructor() {
        console.log("Header component constructor")
    }

    ngOnInit() {
        if(sessionStorage.getItem("user") != null) {
            this.authSvc.setIsLoggedIn(true)
        }
        this.authSvc.currentLogin.subscribe({
            next: (data) => this.isAdminLoggedIn = data,
            error: (err) => console.log("Error in Logged In", err)
        })
        // this.isAdminLoggedIn = this.authSvc.getIsLoggedIn()
    }
}