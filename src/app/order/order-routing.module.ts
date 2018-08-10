import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectDistributorComponent } from './select-distributor/select-distributor.component';
import { ChooseProdcutsComponent } from './choose-prodcuts/choose-prodcuts.component';
import { QuantityModalComponent } from './quantity-modal/quantity-modal.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'choose-distributor',
    component: SelectDistributorComponent
  },
  {
    path: 'choose-prodcuts',
    component: ChooseProdcutsComponent
  },
  {
    path: 'quantity-modal',
    component: QuantityModalComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
