import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SignInPagePageRoutingModule } from './sign-in-page-routing.module';

import { SignInPagePage } from './sign-in-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignInPagePageRoutingModule
  ],
  declarations: [SignInPagePage]
})
export class SignInPagePageModule {}
