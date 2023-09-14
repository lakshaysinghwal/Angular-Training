import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import {ToastrService} from "ngx-toastr"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.styles.css']
})
export class LoginComponent {
  private toastrSvc = inject(ToastrService)

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
      console.log(this.loginForm.value)
    }
    // console.log("login form Submission Valid ? ", this.loginForm.valid)
  }

}
