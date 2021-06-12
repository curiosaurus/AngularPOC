import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList:Order;
  res;
  res2;
  msg:{message:string};
  token;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe((data:Order)=> {
      
      //alert(data);
      this.orderList={
        message:data.message,
        order :data.order
      }
      this.res2=this.orderList.order;

      this.res=JSON.stringify(this.orderList.order[0].products[0].name);
      //alert(this.res);
    });
    this.token=localStorage.getItem("token");
  }

  Order= function () {
    window.location.reload();
  };

  Login(){
    this.router.navigateByUrl("/login");
  }
}
