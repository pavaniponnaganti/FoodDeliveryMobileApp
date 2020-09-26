import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowWorksPagePageRoutingModule } from './how-works-page-routing.module';

import { HowWorksPagePage } from './how-works-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowWorksPagePageRoutingModule
  ],
  declarations: [HowWorksPagePage]
})
export class HowWorksPagePageModule {}
