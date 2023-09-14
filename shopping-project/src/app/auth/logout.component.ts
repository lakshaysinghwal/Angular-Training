import { Component } from '@angular/core';

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
  ngOnInit() {
    sessionStorage.clear()
  }

}
