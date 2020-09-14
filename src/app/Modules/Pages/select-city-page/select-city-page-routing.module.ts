import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCityPagePage } from './select-city-page.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCityPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCityPagePageRoutingModule {}
