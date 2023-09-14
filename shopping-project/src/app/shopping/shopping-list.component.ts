import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  template: `
  <div class = "row">
    <div class = "col-sm-7">
      <app-product-list></app-product-list>
    </div>
    <div class = "col-sm-5 card">
      <app-cart-items></app-cart-items>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class ShoppingListComponent {

}
