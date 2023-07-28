import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];


  addToCart(tour: any) {
    this.cartItems.push(tour);
  }
}
