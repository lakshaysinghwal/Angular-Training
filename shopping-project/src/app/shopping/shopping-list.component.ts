import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  template: `
    <app-product-list></app-product-list>
    <app-cart-items></app-cart-items>
  `,
  styles: [
  ]
})
export class ShoppingListComponent {

}
