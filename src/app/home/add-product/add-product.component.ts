import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from 'src/app/body/product-item.model';
import { ProductsService } from 'src/app/body/products.service';

@Component({
  selector: 'espn-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public ps : ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(product : ProductItemModel) {
    console.log("You logged in");
    console.log(product);
    this.ps.addProduct(product);
  }
}
