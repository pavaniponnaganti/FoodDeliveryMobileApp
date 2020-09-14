import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { loginModel } from './login.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.page.html',
  styleUrls: ['./sign-in-page.page.scss'],
})
export class SignInPagePage implements OnInit {

  constructor(private route:Router, private formBuilder:FormBuilder) { }
  loginmodel: loginModel = new loginModel();
  userinfo:any;
  loginForm:FormGroup;

  ngOnInit() {
    this.logininfovalidation();
  }

  createaccount(){
    this.route.navigateByUrl('sign-up-page');
  }

login(loginData){
  this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
  if(this.userinfo.email === loginData.email && this.userinfo.password === loginData.password){
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Logged in successfully',
      // })
      this.selectpage();
      this.loginForm.reset();
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}

  logininfovalidation(){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],     
    })
  }

  selectpage(){
    this.route.navigateByUrl('select-city-page');
  }

  forgotpassword(){
    this.route.navigateByUrl('forget-page');
  }
}
