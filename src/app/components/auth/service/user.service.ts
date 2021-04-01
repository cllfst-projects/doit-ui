import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthData } from "../models/auth-data.model";
import { LoginData } from "../models/auth-dataLogin.model";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private link ="";
  private token: string;
  private isAuthenticated = false;
  

  constructor(private http: HttpClient, private router: Router) { }


  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }

  
  login(email: string , password: string) {
    const loginData: LoginData = { email: email, password: password };    
    this.http 
    //link is replacement of backend link
      .post<{ token: string }>(this.link + "login", loginData)
        .subscribe(response => {
          const token = response.token;
          this.token = token;
          if (token) {
            this.isAuthenticated = true;
            this.router.navigate(['/']);
          }
      });
  }

  signup(name: string, lastname: string, email: string, phoneNumber:string, password: string){
    const authData: AuthData = {name: name, lastName: lastname ,email: email, phoneNumber: phoneNumber, password: password}
    this.http 
    //link is replacement of backend link
      .post(this.link, authData)
        .subscribe(response => {
            console.log(response);
      });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

}
