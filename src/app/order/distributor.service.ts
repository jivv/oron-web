import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
  constructor(private http: HttpClient) {}

  getAllDistributors(): Observable<any> {
    return this.http.get(AppConstants.REST_URL + '/user/distributor');
  }
}
