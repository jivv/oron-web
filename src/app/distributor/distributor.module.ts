import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DistributorRoutingModule } from './distributor-routing.module';
import { FormsModule } from '@angular/forms';
import { OrderDetailsModalComponent } from './order-details-modal/order-details-modal.component';
import { ViewShopsComponent } from './view-shops/view-shops.component';
import { ViewProductsComponent } from './view-products/view-products.component';

@NgModule({
  imports: [
    CommonModule,
    DistributorRoutingModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [ViewOrdersComponent, OrderDetailsModalComponent, ViewShopsComponent, ViewProductsComponent]
})
export class DistributorModule {}
