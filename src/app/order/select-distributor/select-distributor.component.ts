import { Component, OnInit } from '@angular/core';
import { DistributorService } from '../distributor.service';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-select-distributor',
  templateUrl: './select-distributor.component.html',
  styleUrls: ['./select-distributor.component.css']
})
export class SelectDistributorComponent implements OnInit {
  distributor: any;

  constructor(
    private dis: DistributorService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.dis.getAllDistributors().subscribe(
      data => {
        this.distributor = data['data'];
      },
      () => {
        console.log('Done');
      }
    );
  }

  navigateToProdcuts(i) {
    console.log(this.distributor[i]);
    this.cartService.distributorId = this.distributor[i].id;
    this.router.navigate(['/order/choose-prodcuts'], {
      queryParams: { distributorId: this.distributor[i].id }
    });
  }
}
