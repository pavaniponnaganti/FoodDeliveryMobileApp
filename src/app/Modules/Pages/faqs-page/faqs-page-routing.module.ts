import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqsPagePage } from './faqs-page.page';

const routes: Routes = [
  {
    path: '',
    component: FaqsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqsPagePageRoutingModule {}
