import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { shippingUrl } from 'src/app/config/api';

// import { Shipping } from 'src/app/models/shipping';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    orders = [];
  constructor(private http: HttpClient) { }

//   getShippings(): Observable<Shipping[]> {
//     return this.http.get<Shipping[]>(shippingUrl);
  //}
  addOrder(order) {
    this.orders.push(order);
  }

  getOrder() {
    return this.orders;
  }

  clearOrder() {
    this.orders = [];
    return this.orders;
  }
}