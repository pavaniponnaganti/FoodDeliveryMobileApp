import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
})
export class DashboardPagePage implements OnInit {

  constructor(private route:Router) { }

  images= ['welcomeSlide1.jpg','welcomeSlide1.jpg', 'welcomeSlide1.jpg','welcomeSlide1.jpg'];
  ngOnInit() {
  }

  backbuttonclick(){
    this.route.navigateByUrl('select-city-page');
  }

}
