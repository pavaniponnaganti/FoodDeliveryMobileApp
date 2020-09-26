import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyaccountPagePageRoutingModule } from './myaccount-page-routing.module';

import { MyaccountPagePage } from './myaccount-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyaccountPagePageRoutingModule
  ],
  declarations: [MyaccountPagePage]
})
export class MyaccountPagePageModule {}
