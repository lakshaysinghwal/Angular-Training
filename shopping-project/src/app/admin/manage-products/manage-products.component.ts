import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  manageProducts: Product[] = []
  frmProduct: Product= new Product(0,"", 0, "")
  //Using injectable parameter for DI
  constructor(private productSvc:ProductService, private toastrSvc:ToastrService) {

  }
  ngOnInit() {
    this.getAllProducts()
    // this.manageProducts = this.productSvc.getProducts()
  }

  getAllProducts() {
    this.productSvc.getAllProducts().subscribe({
      next: (data) => this.manageProducts = data,
      error: (err)  => this.toastrSvc.error("Getting Data Error : ",err)
    })
  }

  save() {
    if(this.frmProduct.id == 0) {
      //Add a new product
      this.productSvc.addProducts(this.frmProduct).subscribe({
        next: (data) => {
          this.toastrSvc.success("Product added Successfully")
          this.getAllProducts()
        },
        error: (err) => this.toastrSvc.error("Error Occurred while adding product ", err)
      })
    } else {
      //Update a product
      this.productSvc.updateProduct(this.frmProduct).subscribe({
        next: (data) => {
          this.toastrSvc.success("Product Updated")
          this.getAllProducts()
        },
        error: (err) => this.toastrSvc.error("Error in Updating Product", err)
      })
    }
    this.frmProduct = new Product(0, "", 0, "")
  }

  view(product: Product) {
    // this.frmProduct = product
    Object.assign(this.frmProduct, product)
  }

  delete(id: number) {
    this.productSvc.deleteProduct(id).subscribe({
      next: () => {
        this.toastrSvc.success("Product Deleted")
        this.getAllProducts()
      },
      error: (err) => this.toastrSvc.error("Error while deleting product")
    })

  }
}
