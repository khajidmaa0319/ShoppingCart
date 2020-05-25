import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';
import { DetailService } from 'src/app/services/detail.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  @Input() addedToWishlist: boolean;


  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private detailService: DetailService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  handleViewDetail() {
    this.detailService.getDetail(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    })
  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
      window.alert('SEND TO CART !!! :) ');
    })
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
      window.alert('SEND TO WISHLIST!!!');
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
      window.alert('DELETED FROM WISHLIST!!!');
    })
  
  }
    
    
  
  
}
