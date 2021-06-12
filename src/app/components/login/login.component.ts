import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  config: { userId: string; token: string; };

  constructor(private sendService:AuthService, private router:Router) { }

  email;
  password;
  token;

  ngOnInit(): void {
    this.token=localStorage.getItem("token");
  }

  submitForm(){ 
    console.log("submit")
    this.sendService.login(this.email,this.password).subscribe((data:Login)=>
        
      this.config = {
        userId: data.userId,
        token:  data.token
    })

    console.log("submit",this.config)
    this.token=this.config.token;
    localStorage.setItem("token",this.config.token);

    alert(localStorage.getItem("token") );
  }

  Logout(){
    localStorage.removeItem("token");
    console.log("token deleted>?",localStorage.getItem("token"))
    setTimeout( ()=>{window.location.reload()}, 1000);
  }
}
