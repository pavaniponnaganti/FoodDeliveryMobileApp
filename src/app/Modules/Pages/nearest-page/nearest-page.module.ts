import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearestPagePageRoutingModule } from './nearest-page-routing.module';

import { NearestPagePage } from './nearest-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearestPagePageRoutingModule
  ],
  declarations: [NearestPagePage]
})
export class NearestPagePageModule {}
