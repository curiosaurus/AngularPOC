import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../model/cart';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product;
  category=["Headsets", "Mobiles", "Laptops", "Speakers", "Mouse"];
  filteredProduct;
  categoryId;
  res2;
  len;
  constructor(private productsService: ProductsService,
              private cartService: CartService, 
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Get all products")
    this.productsService.getAllProducts().subscribe((data:Product)=> {
      this.productList={
        message:data.message,
        totalItems:data.totalItems
      }

      this.res2=this.productList.totalItems.rows;
      this.len=this.res2.length;
    })
  }

addCart(id){
  this.cartService.postCart(id).subscribe((resp:Cart)=>{
    // alert(resp.message);
  })
}

async filter(){

  this.productsService.getAllProducts().subscribe((data:Product)=> {
  this.productList={
    message:data.message,
    totalItems:data.totalItems
  }
  this.res2=this.productList.totalItems.rows;

  this.route.queryParams.subscribe(params => {this.category=params.category})
  this.res2=this.res2.filter(p=>p.category==this.categoryId);
  this.len=this.res2.length;
  })

}

}
