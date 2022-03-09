import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item.model";
import { ProductsService } from "./products.service";

@Component({
    selector: 'team-card-layout',
    templateUrl: 'team-card-layout.component.html'
})

export class TeamCardLayoutComponent implements OnInit{
    products: ProductItemModel[] = [];

    constructor(private productsService:ProductsService) {
        for (var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => {
            console.log("Fetching product data");
            for(var product of data) {
                console.log(data);
                this.products.push(product);
            }
           
        })
    }
}