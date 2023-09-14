//Refer Injectable Decorator
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

//Using Injectable decorator
@Injectable()
//Define Service class
export class ProductService {
    private productsData:Product[] = [
        new Product(1, "Sony", 78000, "Sony Smart TV"),
        new Product(2, "MacBook Pro", 250000, "Apple Mac Laptop"),
        new Product(3, "S20 ultra", 150000, "Samsung smartphone")
    ]

    getProducts() {
        return this.productsData
    }
}