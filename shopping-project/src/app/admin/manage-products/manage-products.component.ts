import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  manageProducts: Product[] = []
  //Using injectable parameter for DI
  constructor(private productSvc:ProductService) {

  }
  ngOnInit() {
    this.manageProducts = this.productSvc.getProducts()
  }
}
