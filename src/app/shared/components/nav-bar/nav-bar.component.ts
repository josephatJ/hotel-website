import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  homeIsSet: boolean = false;
  roomsAndRatesSet: boolean = false;
  servicesSet: boolean = false;
  private homeid: string;
  constructor(private router: Router) {
    this.homeid = 'home';
  }

  ngOnInit() {
    if (this.router.url == '/') {
      this.homeIsSet = true;
    } else if (this.router.url.indexOf('rooms-and-rates') > -1) {
      this.roomsAndRatesSet = true;
      console.log(this.roomsAndRatesSet, this.router.url)
    } else if (this.router.url.indexOf('services') > -1) {
      this.servicesSet = true;
    }
  }

  //
  navFunction(id) {
    console.log(id);
  }

}
