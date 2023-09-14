import { Component, inject } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList:Product[]=[]
  //Inject the Dependency Objects
  private prodSvc = inject(ProductService)

  ngOnInit() {
    this.productList = this.prodSvc.getProducts()
  }
}
