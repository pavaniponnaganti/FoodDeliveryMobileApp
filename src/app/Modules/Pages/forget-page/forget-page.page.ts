import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from '../sign-in-page/login.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-forget-page',
  templateUrl: './forget-page.page.html',
  styleUrls: ['./forget-page.page.scss'],
})
export class ForgetPagePage implements OnInit {

  constructor(private route:Router) { }
  userinfo:any;
  loginmodel:loginModel = new loginModel();
  isShowPassword: boolean;

  ngOnInit() {
  }
  backtologinpage(){
    this.route.navigateByUrl('sign-in-page');
  }

  resetdetails(getDetails){
    this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
    if(this.userinfo.email === getDetails.email){
        this.isShowPassword = true;
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Email!',
      })
    }
  }
}
