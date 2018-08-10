import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // items = this.cartService.products.length;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {}

  checkout() {
    this.router.navigate(['/order/cart']);
  }

  goToDistributorConsole() {
    this.router.navigate(['/distributor/view-orders']);
  }

  goHome() {
    this.router.navigate(['/order/choose-distributor']);
  }
}
