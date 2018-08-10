import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NoRouteFoundComponent } from './no-route-found/no-route-found.component';

const routes: Routes = [
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'distributor',
    loadChildren: './distributor/distributor.module#DistributorModule'
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: '**',
    component: NoRouteFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouting {}
