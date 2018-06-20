import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input() product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  addToCart() {
    // let cart = this.shoppingCartService.getOrCreateCartId();
    this.shoppingCartService.addToCart(this.product);
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }


}