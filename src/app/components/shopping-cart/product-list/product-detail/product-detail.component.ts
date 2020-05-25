import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  @Input() productItem: Product;
  //detailItems = [];
  constructor(
    private detailService: DetailService ) { }

  ngOnInit() {
    
  }
  
  
}