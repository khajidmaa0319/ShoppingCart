import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
import { detailUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

    @Input() productItem: Product; 

    constructor(private http: HttpClient) { }
  
    getDetail(productItem: Product): Observable<any> {
        return this.http.post(detailUrl, { productItem });
        //return this.http.get<Product[]>(detailUrl);
      }
  }