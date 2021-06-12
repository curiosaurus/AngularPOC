import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../../model/cart';
import { CartService } from '../../services/cart.service';
import { ItemDetail } from '../../model/item-detail';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  productList: Product;
  res;
  res2;
  id:string;
  config:{"message":string;
          "post":{"id":number;
                  "name":string;
                  "price":number;
                  "image":string;
                  "description":string;
                  "createdAt":string;
                  "updatedAt":string;
                  "userId":number
                }
          }

  constructor(private productsService:ProductsService, 
              private route:ActivatedRoute,
              private cartService:CartService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.queryParamMap.get('id');

    this.productsService.viewProduct(this.id).subscribe((data:any)=> {
      
      this.res=JSON.stringify(data);
      this.config={
        message:data.message,
        post:data.post
      }
      this.res2=this.config.post;
      // alert(this.res);
    });
  }

  addCart(){
    this.cartService.postCart(this.id).subscribe((resp:Cart)=>{
      // alert(resp.message);
    })
  }

}
