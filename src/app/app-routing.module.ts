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
  {
    path: 'nearest-page',
    loadChildren: () => import('./Modules/Pages/nearest-page/nearest-page.module').then( m => m.NearestPagePageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./Modules/Pages/cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./Modules/Pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'language-page',
    loadChildren: () => import('./Modules/Pages/language-page/language-page.module').then( m => m.LanguagePagePageModule)
  },
  {
    path: 'myaccount-page',
    loadChildren: () => import('./Modules/Pages/myaccount-page/myaccount-page.module').then( m => m.MyaccountPagePageModule)
  },
  {
    path: 'myorders-page',
    loadChildren: () => import('./Modules/Pages/myorders-page/myorders-page.module').then( m => m.MyordersPagePageModule)
  },
  {
    path: 'about-page',
    loadChildren: () => import('./Modules/Pages/about-page/about-page.module').then( m => m.AboutPagePageModule)
  },
  {
    path: 'how-works-page',
    loadChildren: () => import('./Modules/Pages/how-works-page/how-works-page.module').then( m => m.HowWorksPagePageModule)
  },
  {
    path: 'faqs-page',
    loadChildren: () => import('./Modules/Pages/faqs-page/faqs-page.module').then( m => m.FaqsPagePageModule)
  },
  {
    path: 'contact-page',
    loadChildren: () => import('./Modules/Pages/contact-page/contact-page.module').then( m => m.ContactPagePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
