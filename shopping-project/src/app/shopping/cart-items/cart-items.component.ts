import { Component, inject } from '@angular/core';
import { CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  cartItems:CartItem[] =[]
  private cartSvc = inject(CartService)
  ngOnInit() {
    this.cartItems = this.cartSvc.getCartItems()
  }

}
