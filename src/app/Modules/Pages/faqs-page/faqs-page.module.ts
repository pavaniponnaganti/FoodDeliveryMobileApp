import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqsPagePageRoutingModule } from './faqs-page-routing.module';

import { FaqsPagePage } from './faqs-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqsPagePageRoutingModule
  ],
  declarations: [FaqsPagePage]
})
export class FaqsPagePageModule {}
