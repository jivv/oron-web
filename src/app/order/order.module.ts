import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { SelectDistributorComponent } from './select-distributor/select-distributor.component';
import { ChooseProdcutsComponent } from './choose-prodcuts/choose-prodcuts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './prodcut-filter';
import { QuantityModalComponent } from './quantity-modal/quantity-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  entryComponents: [QuantityModalComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    SelectDistributorComponent,
    ChooseProdcutsComponent,
    FilterPipe,
    QuantityModalComponent,
    CartComponent,
    CheckoutComponent
  ],
  exports: [QuantityModalComponent]
})
export class OrderModule {}
