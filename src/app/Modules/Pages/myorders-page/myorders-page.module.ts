import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyordersPagePageRoutingModule } from './myorders-page-routing.module';

import { MyordersPagePage } from './myorders-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyordersPagePageRoutingModule
  ],
  declarations: [MyordersPagePage]
})
export class MyordersPagePageModule {}
