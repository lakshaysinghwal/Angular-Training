import { NgModule } from "@angular/core";
import { ShoppingListComponent } from './shopping-list.component';
// import {Router}
@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  exports: [ShoppingListComponent]
})
export class ShoppingModule {
    constructor() {
        console.log("Shopping module created")
    }
}