import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewShopsComponent } from './view-shops/view-shops.component';

const routes: Routes = [
  {
    path: 'view-orders',
    component: ViewOrdersComponent
  },
  {
    path: 'view-shops',
    component: ViewShopsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule {}
