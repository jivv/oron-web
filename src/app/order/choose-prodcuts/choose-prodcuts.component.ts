import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FilterPipe } from '../prodcut-filter';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuantityModalComponent } from '../quantity-modal/quantity-modal.component';
import { Observable } from 'rxjs';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-choose-prodcuts',
  templateUrl: './choose-prodcuts.component.html',
  styleUrls: ['./choose-prodcuts.component.css']
})
export class ChooseProdcutsComponent implements OnInit {
  distributorId;
  products;
  searchText;
  bsModalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private modalService: BsModalService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.distributorId = this.route.snapshot.queryParams['distributorId'];
    this.getProductList();
  }

  getProductList() {
    this.productService.getAllProducts(this.distributorId).subscribe(data => {
      this.products = data['data'];
    });
  }

  modalWork(p) {
    this.openModalToChooseQuantity(p['name'], p['id']).subscribe(data => {
      console.log(data);
      // this.cartService.addProduct(data);
      console.log(this.products);
    });
  }

  openModalToChooseQuantity(name: string, id) {
    const initialState = {
      title: name,
      productId: id
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
}
