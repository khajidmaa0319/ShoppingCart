import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { OrderService } from  'src/app/services/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items;
  checkoutForm;


  private readonly newProperty = this.checkoutForm;
    constructor(
      private orderService: OrderService,
      private formBuilder: FormBuilder,
      )
    {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }
    

  ngOnInit() {
    this.items = this.orderService.getOrder();
  }

  onSubmit(customerData) {
    
    
    this.checkoutForm.reset();
    
    console.log('YOUR NAME AND ADDRESS!', customerData);
    window.alert('THANK YOU VERY MUCH !!! YOUR PRODUCT IS PURCHASED!!! :) ');
    
  }
}
