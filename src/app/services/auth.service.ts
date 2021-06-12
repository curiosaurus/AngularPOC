import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email, password){
    
    const user={
      email:email,
      password:password
    }
    console.log("login",user)
    return this.http.post('http://localhost:3000/auth/login',user);
  }
  register(name, email, password){
    const user={
      name:name,
      email:email,
      password:password
    }
    return this.http.put('http://localhost:3000/auth/register',user);
  }
}
