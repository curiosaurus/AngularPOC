import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductsService, private router:Router) { }

  name;
  image;
  price;
  description;
  category;
  token;

  ngOnInit(): void {
    this.token=localStorage.getItem("token");
  }

  submitForm(){
    this.productService.addProduct(this.name,this.price,this.image,this.description,this.category).subscribe((data:any)=>{
      alert(data.message);
      console.log(data);
   })
  }

  Login(){
    this.router.navigateByUrl("/login");
  }
}
