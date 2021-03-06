import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable ({
    providedIn: 'root'
})
export class ProductsService {
    private baseUrl:string = "https://espn-71018-default-rtdb.firebaseio.com/";
    private productsEndpoint: string = "products.json";

    constructor(private db:AngularFireDatabase) {

    }

    public getProducts() {
        return this.db.list<ProductItemModel>("products").valueChanges()
    }

    public getProduct(index:number) {
        
    }

    addProduct(product : ProductItemModel){
        this.db.list<ProductItemModel>("products").push(product);
    }
}