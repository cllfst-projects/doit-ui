import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  onSignup (firstName: string, lastName: string, email: string, phoneNumber:string, password: string) {
    this.userService.signup(firstName, lastName, email, phoneNumber, password);
  }
}
