import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../order/product.service';
import { Product } from '../../models/product';
import { BroadcastdataService } from '../../broadcastdata.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  allProducts: Product[] = [];
  showErrorMessage = false;
  errorMessage;

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
      name: {
        title: 'product Name'
      },
      description: {
        title: 'Description'
      },
      specialNotes: {
        title: 'Special Notes'
      },
      piecesPerCase: {
        title: 'Pieces per Case'
      },
      minimumQuantityToOrder: {
        title: 'Minimun Quantity to Order'
      },
      availablePieces: {
        title: 'Available Pieces'
      },
      availableCases: {
        title: 'Available Cases'
      },
      available: {
        title: 'Available',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select category',
            list: [
              { value: true, title: 'true' },
              { value: false, title: 'false' }
            ]
          }
        }
      }
    }
  };

  constructor(
    private productService: ProductService,
    private broadcastdataService: BroadcastdataService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts(1).subscribe(
      data => {
        this.allProducts = data['data'];
      },
      err => {
        console.log('Unable to Fetch products');
      }
    );
  }

  confirmCreate(e) {
    if (this.validateProduct(e.newData)) {
      this.productService.saveProduct(1, e.newData).subscribe(
        data => {
          console.log(data);
          e.confirm.resolve();
          this.getAllProducts();
        },
        err => {
          console.log('Unable to add new Porduct');
        }
      );
    }
  }

  confirmEdit(e) {
    if (this.validateProduct(e.newData)) {
      this.productService.saveProduct(1, e.newData).subscribe(
        data => {
          e.confirm.resolve();
        },
        err => {
          console.log('Unable to add new Porduct');
        }
      );
    }
  }

  deleteProduct(e) {
    const msg = 'Delete ' + e.data.name + ' from Shop list ?';
    if (confirm(msg)) {
      this.productService.deleteProduct(e.data.id).subscribe(
        data => {
          e.confirm.resolve();
        },
        err => {
          this.showErrorMessage = true;
          this.errorMessage =
            'Unable to delete from DataBase please try again later';
        }
      );
    }
  }

  validateProduct(product) {
    console.log(product);
    if (product.name !== '' && product.available !== '') {
      this.showErrorMessage = false;
      return true;
    } else {
      if (product.name == '') {
        this.showErrorMessage = true;
        this.errorMessage = 'Please provide Name to Save the product';
      } else if (product.available == '') {
        this.showErrorMessage = true;
        this.errorMessage = 'Please choose availability of product';
      }
    }
  }
}
