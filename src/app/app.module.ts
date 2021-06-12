import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SendService } from './send.service';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { ProductsService } from './services/products.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShowItemComponent } from './components/show-item/show-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'cart',component:CartComponent},
      {path:'order',component:OrderComponent},
      {path:'add',component:AddProductComponent},
      {path:'product',component:ShowItemComponent}
    ])

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    OrderComponent,
    RegisterComponent,
    NavbarComponent,
    AddProductComponent,
    ShowItemComponent
  ],
  providers: [
     AuthService,
     CartService,
     OrderService,
     ProductsService,
     { provide: HTTP_INTERCEPTORS, useClass: SendService, multi: true }
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
