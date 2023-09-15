import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
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
  private cartSvc = inject(CartService)
  private toastrSvc = inject(ToastrService)

  today = new Date()

  ngOnInit() {
    // this.productList = this.prodSvc.getProducts()
    this.prodSvc.getAllProducts().subscribe({
      next: (data) => this.productList = data,
      error: (err) => this.toastrSvc.error("Error in getting products : ",err)

    })
  }
  addToCart(product:Product) {
    let flag = true
    if(this.cartSvc.cartData.length>0) {
      for(let i=0; i<this.cartSvc.cartData.length;i++) {
        if (this.cartSvc.cartData[i].name == product.name)
        {
          let quantity = this.cartSvc.cartData[i].qty+1
          this.cartSvc.cartData[i].qty = quantity
          flag = false
          break
        }
        // else {
        //   this.cartSvc.addCartItem(new CartItem(product.id, product.name, product.price, 1))
        // }
      }

    } if (flag == true ) {
      this.cartSvc.addCartItem(new CartItem(product.id, product.name, product.price, 1))
    }
  }
}
