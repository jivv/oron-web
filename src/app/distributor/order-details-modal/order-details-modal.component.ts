import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-details-modal',
  templateUrl: './order-details-modal.component.html',
  styleUrls: ['./order-details-modal.component.css']
})
export class OrderDetailsModalComponent implements OnInit {
  @Input('orderDetails')
  orderDetails: any;
  @Output()
  confirmOrderClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  confirmOrder() {
    this.confirmOrderClick.emit(true);
    this.orderDetails.orderConfirmed = true;
  }

  isArray(data) {
    if (!Array.isArray(this.orderDetails.orderJson)) {
      this.orderDetails.orderJson = JSON.parse(this.orderDetails.orderJson);
    }
    return true;
  }

  resendMessage() {}
}
