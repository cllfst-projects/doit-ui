import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showNavItems () {
    let x = document.getElementById("nav-items-id");
    if (x.className === "nav-items") {
        x.className += " responsive";
    } else {
        x.className = "nav-items";
    }
}
}
