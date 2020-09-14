import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome-slide',
    pathMatch: 'full'
  },
  {
    path: 'welcome-slide',
    loadChildren: () => import('./Modules/Pages/welcome-slide/welcome-slide.module').then( m => m.WelcomeSlidePageModule)
  },
  {
    path: 'sign-in-page',
    loadChildren: () => import('./Modules/Pages/sign-in-page/sign-in-page.module').then( m => m.SignInPagePageModule)
  },
  {
    path: 'sign-up-page',
    loadChildren: () => import('./Modules/Pages/sign-up-page/sign-up-page.module').then( m => m.SignUpPagePageModule)
  },
  {
    path: 'forget-page',
    loadChildren: () => import('./Modules/Pages/forget-page/forget-page.module').then( m => m.ForgetPagePageModule)
  },
  {
    path: 'select-city-page',
    loadChildren: () => import('./Modules/Pages/select-city-page/select-city-page.module').then( m => m.SelectCityPagePageModule)
  },
  {
    path: 'dashboard-page',
    loadChildren: () => import('./Modules/Pages/dashboard-page/dashboard-page.module').then( m => m.DashboardPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
