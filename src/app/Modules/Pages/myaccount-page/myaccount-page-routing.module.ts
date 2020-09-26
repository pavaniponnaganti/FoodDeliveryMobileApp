import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyaccountPagePage } from './myaccount-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyaccountPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyaccountPagePageRoutingModule {}
