import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from "../models/auth-data.model";
import { LoginData } from "../models/auth-dataLogin.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private link ="";

  constructor(private http: HttpClient) { }
  
  login(email: string , password: string) {
    const loginData: LoginData = { email: email, password: password };    
    this.http 
    //link is replacement of backend link
      .post(this.link, loginData)
        .subscribe(response => {
            console.log(response);
      });
  }

  signup(name: string, lastname: string, email: string, password: string){
    const authData: AuthData = {name: name, lastName: lastname ,email: email, password: password}
    this.http 
    //link is replacement of backend link
      .post(this.link, authData)
        .subscribe(response => {
            console.log(response);
      });
  }

}
