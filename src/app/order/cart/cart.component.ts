import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { QuantityModalComponent } from '../quantity-modal/quantity-modal.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any;
  bsModalRef: BsModalRef;

  constructor(
    private cartService: CartService,
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.cartService.products;
    console.log(this.products);
  }

  modalWork(p) {
    this.openModalToChooseQuantity(p).subscribe(data => {
      console.log(data);
      this.cartService.addProduct(data);
      console.log(this.products);
    });
  }

  openModalToChooseQuantity(p) {
    const initialState = {
      title: p.title,
      productId: p.id,
      cases: p.cases,
      pieces: p.pieces
    };
    this.bsModalRef = this.modalService.show(QuantityModalComponent, {
      initialState
    });
    return new Observable<string>(this.openModal());
  }

  openModal() {
    return observer => {
      const subscription = this.modalService.onHidden.subscribe(
        (reason: string) => {
          observer.next(this.bsModalRef.content.data);
          observer.complete();
        }
      );
      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    };
  }

  removeProduct(p) {
    this.cartService.removeProduct(p);
  }

  checkout() {
    this.router.navigate(['order/checkout']);
  }
}
