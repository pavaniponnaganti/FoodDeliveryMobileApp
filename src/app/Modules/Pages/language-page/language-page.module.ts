import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePagePageRoutingModule } from './language-page-routing.module';

import { LanguagePagePage } from './language-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagePagePageRoutingModule
  ],
  declarations: [LanguagePagePage]
})
export class LanguagePagePageModule {}
