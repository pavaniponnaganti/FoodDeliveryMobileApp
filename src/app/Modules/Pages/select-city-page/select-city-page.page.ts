import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-city-page',
  templateUrl: './select-city-page.page.html',
  styleUrls: ['./select-city-page.page.scss'],
})
export class SelectCityPagePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  navigationdashboard()
  {
    this.route.navigateByUrl('dashboard-page');
  }

}
