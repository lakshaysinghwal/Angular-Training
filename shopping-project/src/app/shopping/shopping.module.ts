import { NgModule } from "@angular/core";
import { ShoppingListComponent } from './shopping-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CommonModule } from "@angular/common";
// import {Router}
@NgModule({
  declarations: [
    ShoppingListComponent,
    ProductListComponent,
    CartItemsComponent
  ],
  exports: [ShoppingListComponent],
  imports: [CommonModule]
})
export class ShoppingModule {
    constructor() {
        console.log("Shopping module created")
    }
}