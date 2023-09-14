import { NgModule, importProvidersFrom } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from "@angular/router"
import { AppMaterialModule } from "../app-material.module";
import { ReactiveFormsModule } from "@angular/forms";

const authRoutes:Routes = [
    {path:"login", component: LoginComponent},
    {path:"logout", component: LogoutComponent},
    {path:"register", component: RegisterComponent}  
]

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [AppMaterialModule, ReactiveFormsModule, RouterModule.forChild(authRoutes)]
})
export class AuthModule {
    constructor() {
        console.log("Auth module created")
    }
}