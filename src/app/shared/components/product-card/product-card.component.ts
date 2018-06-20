import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-action') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  addToCart() {
    // let cart = this.shoppingCartService.getOrCreateCartId();
    this.shoppingCartService.addToCart(this.product);
  }

}