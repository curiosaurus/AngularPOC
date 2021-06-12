import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/feed/posts'); // return an observable
  }
 
  addProduct(name, price, image, description, category){
    const data={
      name:name,
      price:price,
      description:description,
      image:image,
      category:category
    }
    return this.http.post('http://localhost:3000/feed/post', data); // return an observable
  }
  
  viewProduct(id){
    return this.http.get('http://localhost:3000/feed/post/'+id);
  }
}