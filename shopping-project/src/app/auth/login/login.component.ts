import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import {ToastrService} from "ngx-toastr"
import { Router } from "@angular/router"
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.styles.css']
})
export class LoginComponent {
  private toastrSvc = inject(ToastrService)
  private router = inject(Router)
  private authSvc = inject(AuthService)

  loginForm:FormGroup
  constructor() {
    this.loginForm = new FormGroup({
      uname: new FormControl("", Validators.required),
      upwd: new FormControl("", Validators.required)
    })

  }
  doLogin() {
    if(this.loginForm.invalid) {
      this.toastrSvc.error("Invalid Inputs..")

    } else{
      // console.log(this.loginForm.value)
      if(this.loginForm.value.uname == "admin"  && this.loginForm.value.upwd == "admin") {
        this.toastrSvc.success("Login Success..")
        this.authSvc.setIsLoggedIn(true)
        sessionStorage.setItem("User", this.loginForm.value.uname)
        //Navigate to Dashboard
        this.router.navigate(["/admin/dashboard"])
      } else {
        this .toastrSvc.error("Username or password is invalid.")
      }

    }
    // console.log("login form Submission Valid ? ", this.loginForm.valid)
  }

}
