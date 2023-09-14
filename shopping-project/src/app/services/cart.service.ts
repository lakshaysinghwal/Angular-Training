import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData: CartItem[] = []
  constructor() { }

  getCartItems() {
    return this.cartData
  }
}
