import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products: any = [];
  public distributorId;
  constructor() {}

  public addProduct(p) {
    if (p) {
      if (p.title) {
        if (p.cases || p.pieces) {
          const index = this.products.findIndex(item => item.title == p.title);
          if (index > -1) {
            this.products[index].cases = p.cases;
            this.products[index].pieces = p.pieces;
          } else {
            this.products.push(p);
          }
        }
      }
    }
  }

  public removeProduct(p) {
    const index = this.products.findIndex(item => item.title == p.title);
    this.products.splice(index, 1);
  }
}
