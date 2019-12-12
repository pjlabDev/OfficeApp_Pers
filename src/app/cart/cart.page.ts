import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems();
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    window.alert('Material recogido del carrito.');
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
