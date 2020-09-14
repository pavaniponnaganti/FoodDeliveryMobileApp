import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
})
export class DashboardPagePage implements OnInit {

  constructor() { }

  images= ['welcomeSlide1.jpg','welcomeSlide1.jpg', 'welcomeSlide1.jpg','welcomeSlide1.jpg'];
  ngOnInit() {
  }

}
