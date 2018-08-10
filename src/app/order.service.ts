import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConstants } from './app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  public saveOrder(order): Observable<any> {
    return this.http.post(AppConstants.REST_URL + '/v1/order', order);
  }

  public getAllOrders(distributorId) {
    let params = new HttpParams().set('distributorId', distributorId);
    return this.http.get(AppConstants.REST_URL + '/v1/order', {
      params: params
    });
  }

  public sendConfirmationMessage(phoneNumber, shopName): Observable<any> {
    let params = new HttpParams()
      .set('mobileNumber', phoneNumber)
      .set('shopName', shopName);
    return this.http.get(AppConstants.REST_URL + '/v1/order/sendSms/', {
      params: params
    });
  }
}
