import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private link =" ";

  constructor(private http: HttpClient) { }
  
  login(email: string , password: string) {
    var postData= { email: email , password : password}
    var post = this.http 
    //link is replacement of backend link
      .post<any>(this.link, postData);
      post.subscribe(Response=> {
        console.log(email);
      }, error => {
        console.log("there is an error");
      }
      )
  }

  signup(name: string, lastname: string, email: string, password: string){
    var postData= {name: name, lastname:lastname, email: email, password:password}
    var post = this.http
    //link is replacement of backend link
      .post<any>(this.link, postData);
      post.subscribe(Response => {

      }), error => {
        console.log("user already exists");
      }
  }

}
