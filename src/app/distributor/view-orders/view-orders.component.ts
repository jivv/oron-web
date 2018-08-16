import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Order } from '../../models/order';
import { Router } from '@angular/router';
import { BroadcastdataService } from '../../broadcastdata.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders = [];
  isAuthenticated = false;
  userName;
  password;
  orderDetailsToDisplay: Order;
  selectedOrder: Order;

  settings = {
    actions: {
      add: false,
      edit: false
    },
    delete: {
      confirmDelete: true
    },
    pager: {
      display: true,
      perPage: 10
    },
    columns: {
      id: {
        title: 'Id'
      },
      nameOfUser: {
        title: 'Shop Name'
      },
      createdDate: {
        title: 'Order Date',
        sort: true,
        sortDirection: 'desc'
      },
      orderConfirmed: {
        title: 'Order Confirmed',
        valuePrepareFunction: value => {
          return value === true ? 'Yes' : 'No';
        }
      }
    }
  };

  constructor(
    private orderService: OrderService,
    private modalService: BsModalService,
    private router: Router,
    private broadcastdataService: BroadcastdataService
  ) {}

  ngOnInit() {
    this.broadcastdataService.distributorIdOfLoggedInUser = 1;
    this.getAllOrdersOfDistributor();
  }

  getAllOrdersOfDistributor() {
    this.orderService.getAllOrders(1).subscribe(data => {
      console.log(data);
      this.orders = data['data'];
    });
  }

  showOrder(event) {
    console.log(event.data);
    this.selectedOrder = event.data;
    this.orderDetailsToDisplay = event.data;
    if (!Array.isArray(this.orderDetailsToDisplay.orderJson)) {
      this.orderDetailsToDisplay.orderJson = JSON.parse(
        this.orderDetailsToDisplay.orderJson
      );
    }
  }

  deleteOrder(event) {
    console.log(event);
  }

  loginDistributor() {
    if (this.userName === 'a' && this.password === 'a') {
      this.isAuthenticated = true;
    }
  }

  confirmSelectedOrder() {
    this.selectedOrder.orderConfirmed = true;
    this.sendSmsAndSaveOrder(
      this.selectedOrder.phoneNumberOfUser,
      this.selectedOrder.nameOfUser
    );
  }

  saveOrder() {
    this.selectedOrder.orderJson = JSON.stringify(this.selectedOrder.orderJson);
    this.orderService.saveOrder(this.selectedOrder).subscribe(data => {
      console.log(data);
      this.getAllOrdersOfDistributor();
    });
  }

  sendSmsAndSaveOrder(mobileNumber, shopName) {
    this.orderService
      .sendConfirmationMessage(mobileNumber, shopName)
      .subscribe(data => {
        if (data['message'] == 'Message Sent') {
          this.selectedOrder.messageSent = true;
        }
        this.saveOrder();
      });
  }

  viewAndEditShops() {
    this.router.navigate(['/distributor/view-shops']);
  }

  viewAndEditProducts() {
    this.router.navigate(['/distributor/view-products']);
  }
}
