import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagePagePage } from './language-page.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagePagePageRoutingModule {}
