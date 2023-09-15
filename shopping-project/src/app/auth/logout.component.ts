import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  template: `
    <!-- <p> -->
      <h2> User Logged out successfully</h2>
    <!-- </p> -->
  `,
  styles: [
  ]
})
export class LogoutComponent {
  private authSvc = inject(AuthService)
  
  ngOnInit() {
    this.authSvc.setIsLoggedIn(false)
    sessionStorage.clear()
  }

}
