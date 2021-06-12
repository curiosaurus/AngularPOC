import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }

  getCart(){
    return this.http.get('http://localhost:3000/cart/posts');
  }

  postCart(id){
    const product={
      productId:id
    }
    return this.http.post('http://localhost:3000/cart/add',product);
  }

  deleteCart(id){
    const product={
      productId:id
    }
    return this.http.put('http://localhost:3000/cart/delete-item',product);
  }
}