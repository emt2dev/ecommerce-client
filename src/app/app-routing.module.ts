import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},
  {path: 'entry', loadComponent: () => import('./modules/forms/entry/entry.component').then((modulePart) => modulePart.EntryComponent),},
  {path: 'shop', loadComponent: () => import('./components/shop/shop.component').then((modulePart) => modulePart.ShopComponent),},
  
  {path: 'cart', loadComponent: () => import('./components/cart/cart.component').then((modulePart) => modulePart.CartComponent),},
  
  {path: 'contact', loadComponent: () => import('./components/contact/contact.component').then((modulePart) => modulePart.ContactComponent),},
  {path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then((modulePart) => modulePart.DashboardComponent),},
  
  {path: 'product/:productId', loadComponent: () => import('./components/product/product.component').then((modulePart) => modulePart.
  ProductComponent,),},
  
  { path: '**', loadComponent: () => import('./components/notfound/notfound.component').then((modulePart) => modulePart.NotfoundComponent),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
