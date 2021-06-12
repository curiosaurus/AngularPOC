import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http:HttpClient) { }

  getOrder(){
    return this.http.get('http://localhost:3000/order/view');
  }

  postOrder(){
    return this.http.post('http://localhost:3000/order/make',{});
  }
}
