import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(distributorId): Observable<any> {
    return this.http.get(
      AppConstants.REST_URL + '/v1/product/' + distributorId
    );
  }

  saveProduct(distributorId, product: Product): Observable<any> {
    let params = new HttpParams().set('distributorId', distributorId);
    return this.http.post(AppConstants.REST_URL + 'v1/product/', product, {
      params: params
    });
  }

  deleteProduct(productId: number) {
    return this.http.post(
      AppConstants.REST_URL + 'v1/product/delete',
      productId
    );
  }
}
