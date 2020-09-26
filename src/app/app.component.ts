import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menulist=[
    {
    path:'dashboard-page',
    name:'home',
    icon:'home'
  },
  {
    path:'select-city-page',
    name:'city',
    icon:'location'
  },
  {
    path:'language-page',
    name:'Language',
    icon:'flag'
  },
  {
    path:'sign-in-page',
    name:'MyAccount',
    icon:'person-circle'
  },
  {
    path:'myorders-page',
    name: 'My Orders',
    icon:'cart'
  }]

  infolist=[{
    path:'about-page',
    name:'About Us',
    icon:'arrow-forward'
  },
{
  path:'how-works-page',
  name:'How it works',
  icon:'arrow-forward'
},
{
  path:'faqs-page',
  name:'Faq\'s',
  icon:'arrow-forward'
},
{
  path:'contact-page',
  name:'Contact Us',
  icon:'arrow-forward'
}]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
