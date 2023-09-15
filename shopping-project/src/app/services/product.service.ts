//Refer Injectable Decorator
import { Injectable, inject } from "@angular/core";
import { Product } from "../models/product.model";
import { map } from "rxjs/operators"
import { DataService } from "./data.service";

//Using Injectable decorator
@Injectable()
//Define Service class
export class ProductService {
    private productsData:Product[] = [ 
        // new Product(1, "Sony", 78000, "Sony Smart TV"),
        // new Product(2, "MacBook Pro", 250000, "Apple Mac Laptop"),
        // new Product(3, "S20 ultra", 150000, "Samsung smartphone")
    ]
    private dataSvc = inject(DataService)
    private restUrl = "http://localhost:3000/wsproducts"

    getAllProducts() {
        return this.dataSvc.readData(this.restUrl).pipe(map(responseData => responseData as Product[]))
    }

    addProducts(newProduct: Product) {
        return this.dataSvc.createData(this.restUrl, newProduct).pipe(map(responseData => responseData as Product))
    }

    updateProduct(modifiedProduct: Product) {
        return this.dataSvc.updateData(this.restUrl, modifiedProduct).pipe(map(responseData => responseData as Product))
    }

    deleteProduct (id: number) {
        return this.dataSvc.deleteData(this.restUrl, id)
    }

    getProducts() {
        return this.productsData
    }
}