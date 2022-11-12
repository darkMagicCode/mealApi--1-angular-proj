import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


  navtoggle: boolean = true;

  navChange() {
    this.navtoggle = !this.navtoggle
  }

  navClose: string = "fas fa-bars";
  navOpen: string = "fas fa-close";


}
