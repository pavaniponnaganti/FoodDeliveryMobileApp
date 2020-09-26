import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowWorksPagePage } from './how-works-page.page';

const routes: Routes = [
  {
    path: '',
    component: HowWorksPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowWorksPagePageRoutingModule {}
