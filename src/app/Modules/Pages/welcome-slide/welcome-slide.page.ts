import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-slide',
  templateUrl: './welcome-slide.page.html',
  styleUrls: ['./welcome-slide.page.scss'],
})
export class WelcomeSlidePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    //this.route.navigateByUrl('sign-in-page');
  }

  skip(){
    this.route.navigateByUrl('sign-in-page');
  }

}
