import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from '../sign-in-page/login.model';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';



@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.page.html',
  styleUrls: ['./sign-up-page.page.scss'],
})
export class SignUpPagePage implements OnInit {

  constructor(private route:Router,private formbuilder:FormBuilder) { }
  loginmodel:loginModel = new loginModel();
  registerForm: FormGroup;
  ngOnInit() {
    this.userinfovalidation();
  }

  backsignin(){
    this.route.navigateByUrl('sign-in-page');
  }

 registerInfo(userinformation:any){
   console.log(userinformation);
   localStorage.setItem('userinfo',JSON.stringify(userinformation));   
   this.registerForm.reset();
   //to reset data after clicking on signup button
  //  this.loginmodel.name='';
  //  this.loginmodel.email='';
  //  this.loginmodel.password='';
  //  this.loginmodel.phonenumber=null;
 }

 userinfovalidation(){
  this.registerForm = this.formbuilder.group({
    email:['',Validators.required],
    password:['', Validators.required],
     name:[''],
    phonenumber:[null,Validators.required]
  })
 }

}
