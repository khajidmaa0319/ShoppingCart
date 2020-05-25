import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { shippingUrl } from 'src/app/config/api';

import { Shipping } from 'src/app/models/shipping';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http: HttpClient) { }

  getShippings(): Observable<Shipping[]> {
    return this.http.get<Shipping[]>(shippingUrl);
  }
}