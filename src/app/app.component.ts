import { Component } from '@angular/core';
import { mock_product_list } from './body/mock_product_list';
import { ProductItemModel } from './body/product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'espn';
  product: ProductItemModel [] = [];

  constructor() {

    for(var product of mock_product_list) {
      console.log(product);
      this.product.push(product);
    }
    // put some code to fetch data from backend using HTTP
  }
}
