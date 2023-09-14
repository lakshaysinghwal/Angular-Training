import { Component, inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.styles.css']
})
export class RegisterComponent {
  private toastrSvc = inject(ToastrService)
  frmUser:User = new User(0,"","","")
  doRegister(valid:any) {
    if(valid) {
      console.log(this.frmUser)
    }
    else {
      this.toastrSvc.error("Insufficient Data Entries... ")
    }

  }

}
