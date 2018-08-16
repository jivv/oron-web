import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Shop } from '../../models/shop';

@Component({
  selector: 'app-view-shops',
  templateUrl: './view-shops.component.html',
  styleUrls: ['./view-shops.component.css']
})
export class ViewShopsComponent implements OnInit {
  allShops: Shop[] = [];
  showErrorMessage = false;
  errorMessage: string;

  settings = {
    edit: {
      confirmSave: true
    },
    add: {
      confirmCreate: true
    },
    delete: {
      confirmDelete: true
    },
    columns: {
      shopName: {
        title: 'Shop Name'
      },
      location: {
        title: 'Location'
      },
      mobileNumber: {
        title: 'Mobile Number'
      },
      gstOrAadharNumber: {
        title: 'GST or Aadhar Number'
      }
    }
  };

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.getAllShops();
  }

  getAllShops() {
    this.shopService.getAllShops().subscribe(data => {
      this.allShops = data['data'];
    });
  }

  deleteShop(e) {
    let msg = 'Delete ' + e.data.shopName + ' from Shop list ?';
    if (confirm(msg)) {
      this.shopService.deleteShop(e.data.id).subscribe(
        data => {
          e.confirm.resolve();
          this.getAllShops();
        },
        err => {
          console.log('Error while deleting shop');
        }
      );
    } else {
      console.log('User cancelled delete');
    }
  }

  confirmEdit(e) {
    console.log(e);
    if (this.validateShopDetails(e.newData)) {
      this.shopService.saveShop(e.newData).subscribe(
        data => {
          console.log(data);
          e.confirm.resolve();
        },
        err => {
          e.confirm.reject();
        }
      );
    }
  }

  confirmCreate(e) {
    console.log(e);
    if (this.validateShopDetails(e.newData)) {
      this.shopService.saveShop(e.newData).subscribe(
        data => {
          console.log(data);
          e.confirm.resolve();
        },
        err => {
          e.confirm.reject();
        }
      );
    }
  }

  validateShopDetails(shop): boolean {
    if (shop.shopName !== '') {
      if (shop.mobileNumber !== '') {
        if (shop.mobileNumber.length === 10) {
          this.showErrorMessage = false;
          return true;
        } else {
          this.showErrorMessage = true;
          this.errorMessage = 'Please Enter a Valid Mobile Number';
          return false;
        }
      }
      this.showErrorMessage = false;
      return true;
    } else {
      this.showErrorMessage = true;
      this.errorMessage = 'Shop Name is Mandatory to Save or Edit Shop';
      return false;
    }
  }
}
