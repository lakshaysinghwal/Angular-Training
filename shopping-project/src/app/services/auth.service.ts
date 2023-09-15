import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false
  //Create an observable for is loggedin 
  currentLogin = new BehaviorSubject(this.isLoggedIn)

  constructor() { }
  setIsLoggedIn(val:boolean) {
    this.isLoggedIn = val
    console.log("Set Auth Service: ",this.isLoggedIn)
    //Deleiver a success notification
    this.currentLogin.next(this.isLoggedIn)
  }
  getIsLoggedIn() {
    return this.isLoggedIn
  }
}
