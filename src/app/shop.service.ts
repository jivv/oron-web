import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from './app-constants';
import { Shop } from './models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http: HttpClient) {}

  public getAllShops() {
    return this.http.get(AppConstants.REST_URL + '/v1/shop');
  }

  public saveShop(shop: Shop) {
    return this.http.post(AppConstants.REST_URL + '/v1/shop', shop);
  }

  public deleteShop(id: number) {
    return this.http.post(AppConstants.REST_URL + '/v1/shop/delete', id);
  }
}
