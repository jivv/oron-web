import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-quantity-modal',
  templateUrl: './quantity-modal.component.html',
  styleUrls: ['./quantity-modal.component.css']
})
export class QuantityModalComponent implements OnInit {
  title: string;
  data: any;
  cases: number;
  pieces: number;
  freePieces: number;
  orderPlaced = false;
  productId;
  showErrorMessage = false;

  constructor(
    private bsModalRef: BsModalRef,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  sendDataToParent() {
    console.log('Hello ORON!');
    this.bsModalRef.hide();
  }

  close() {
    this.bsModalRef.hide();
  }

  order() {
    if (this.cases > 0 || this.pieces > 0) {
      this.data = {
        cases: this.cases,
        pieces: this.pieces,
        title: this.title,
        freePieces: this.freePieces,
        productId: this.productId
      };
      this.cartService.addProduct(this.data);
      this.orderPlaced = true;
      // this.bsModalRef.hide();
    } else {
      this.showErrorMessage = true;
    }
  }
}
