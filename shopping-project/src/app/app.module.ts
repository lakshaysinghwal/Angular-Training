//1. Refer NgModule Decorator
import { NgModule } from "@angular/core";
// import { AuthModule } from "./auth/auth.module";
// import { AdminModule } from "./admin/admin.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent, NotFoundComponent } from "./menulinks.component";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from "./app-material.module";
import { ProductService } from "./services/product.service";

//Define route mapping
const appRoutes:Routes = [
    //Defining routes :  we can define the path routing here
    { path : "home", component : HomeComponent},
    //Redirect
    {path: "", redirectTo:"home", pathMatch:"full"},
    //Lazy loading for Auth module
    {path: "auth", loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)},
    //Lazy loading for Admin Module
    {path: "admin", loadChildren:() => import("./admin/admin.module").then(m => m.AdminModule)},
    
    //un matched routes : if there is no matching path found configured then it will come here and load respective module defined below
    {path: "**", component: NotFoundComponent}
]

//2. Use NgModule Decorator
@NgModule({
    //Module Dependencies : Dependencies for the decorator
    imports : [/*AuthModule, AdminModule,*/ ShoppingModule, BrowserModule, RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule, AppMaterialModule],
    //Register Component classes
    declarations: [AppComponent, HeaderComponent, HomeComponent, NotFoundComponent],
    //Start up Components
    bootstrap: [AppComponent],
    //Register Service Classses
    providers: [ProductService]
})

//3. Define Module Class
export class AppModule {
    constructor() {
        console.log("App module created")
    }
}