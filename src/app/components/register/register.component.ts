import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  config: { message: string; id: number; };

  constructor(private sendService:AuthService) { }

  name;
  email;
  password;

  ngOnInit(): void {
  }

  submitForm(){ 
    this.sendService.register(this.name, this.email,this.password).subscribe((data:any)=>{
      this.config={
        message:data.message,
        id:data.userId
      }
      alert(JSON.stringify(this.config.message));
    })
    
  }

}
