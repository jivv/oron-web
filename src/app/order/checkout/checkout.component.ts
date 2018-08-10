import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { OrderService } from '../../order.service';
import { Order } from '../../models/order';
import { ShopService } from '../../shop.service';
import { Shop } from '../../models/shop';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  nameOfShop;
  phoneNumber = '';
  address = '';
  notes;
  orderPlaced = false;
  shops: Shop[] = [];
  shopSelectedFromList = false;
  selectedShop;
  noError = true;
  errorMessage;
  noProductsInCart = true;
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    if (this.cartService.products.length > 0) {
      this.noProductsInCart = false;
      this.getAllShops();
    } else {
      this.noProductsInCart = true;
    }
  }

  getAllShops() {
    this.shopService.getAllShops().subscribe(data => {
      console.log(data);
      this.shops = data['data'];
    });
  }

  placeOrder() {
    if (this.nameOfShop) {
      if (this.phoneNumber.length === 0 || this.phoneNumber.length === 10) {
        this.orderService
          .saveOrder(this.productArrayToOrderObject())
          .subscribe(data => {
            this.orderPlaced = true;
            this.saveShop();
            console.log(data);
          });
      } else {
        this.noError = false;
        this.errorMessage = 'Please Enter a Valid Phone Number!';
      }
    } else {
      this.noError = false;
      this.errorMessage = 'Please Enter Shop Name!';
    }
  }

  productArrayToOrderObject(): Order {
    var order: Order = new Order();
    order.nameOfUser = this.nameOfShop;
    order.phoneNumberOfUser = this.phoneNumber;
    order.distributorId = this.cartService.distributorId;
    order.address = this.address;
    order.notes = this.notes;
    order.orderJson = JSON.stringify(this.cartService.products);
    console.log(order);
    return order;
  }

  onShopSelect(event) {
    this.shopSelectedFromList = true;
    this.selectedShop = event.item;
    console.log(event);
    this.phoneNumber = event.item.mobileNumber;
    this.address = event.item.location;
  }

  saveShop() {
    if (this.shopSelectedFromList) {
      if (
        this.selectedShop.mobileNumber === '' ||
        (this.selectedShop.mobileNumber == undefined &&
          this.phoneNumber.length === 10)
      ) {
        this.selectedShop.mobileNumber = this.phoneNumber;
        if (this.address !== '') {
          this.selectedShop.address = this.address;
        }
        this.shopService.saveShop(this.selectedShop).subscribe(data => {
          console.log(data);
        });
      }
    }
  }
}
