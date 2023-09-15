import { Injectable, inject } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({
    providedIn: "root"
})

export class AuthGuard {
    private router = inject(Router)
    canActivate() {
        if(sessionStorage.getItem("User")!= null) {
            return true
        } else {
            this.router.navigate(["/auth/login"])
            return false
        }
    }

}