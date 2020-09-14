import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCityPagePageRoutingModule } from './select-city-page-routing.module';

import { SelectCityPagePage } from './select-city-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCityPagePageRoutingModule
  ],
  declarations: [SelectCityPagePage]
})
export class SelectCityPagePageModule {}
