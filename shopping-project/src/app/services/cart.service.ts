import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartData: CartItem[] = []
  constructor() { }

  getCartItems() {
    return this.cartData
  }

  addCartItem(newItem:CartItem) {
    this.cartData.push(newItem)
  }

  deleteCartItem(index:number) {
    this.cartData.splice(index, 1)
  }
}
