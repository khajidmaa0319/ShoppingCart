import { Component, OnInit, Input } from '@angular/core';
//import { Shipping } from 'src/app/models/shipping';
import { ShippingService } from 'src/app/services/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  //shippingList: Shipping[] = []
  shippingCosts;
    
  constructor( 
    private shippingService: ShippingService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.shippingService.getShippings();
  }
  // loadShipping() {
  //   this.shippingService.getShippings().subscribe(shipping => {
  //     this.shippingList = shipping;
  //   })
  // }
}