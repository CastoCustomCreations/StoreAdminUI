import { Component} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ViewEditOrdersComponent } from './components/view-edit-orders/view-edit-orders.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { ViewEditSuppliersComponent } from './components/view-edit-suppliers/view-edit-suppliers.component';
import { ViewEditShippersComponent } from './components/view-edit-shippers/view-edit-shippers.component';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { ReadProductsComponent } from "./components/read-products/read-products.component";
import { CreateCustomersComponent } from './components/create-customers/create-customers.component';
import { ReadCustomersComponent } from "./components/read-customers/read-customers.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, MatSidenavModule, MatTabsModule, CreateCustomersComponent, CreateProductsComponent, ViewEditSuppliersComponent, ViewEditShippersComponent, ViewEditOrdersComponent, ReadProductsComponent, ReadCustomersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StoreAdminUI';
  constructor(private dialog: MatDialog) {}

  openCustomers() {
    this.dialog.open(CreateCustomersComponent, {
      width: '500px', // Adjust width as needed
      height: '500px', // Adjust height as needed

    });

}
openOrders() {
  this.dialog.open(ViewEditOrdersComponent, {
    width: '500px', // Adjust width as needed
    height: '500px', // Adjust height as needed

  });

}
openProducts() {
  this.dialog.open(CreateProductsComponent, {
    width: '500px', // Adjust width as needed
    height: '500px', // Adjust height as needed

  });

}
openSuppliers() {
  this.dialog.open(ViewEditSuppliersComponent, {
    width: '500px', // Adjust width as needed
    height: '500px', // Adjust height as needed

  });

}
openShippers() {
  this.dialog.open(ViewEditShippersComponent, {
    width: '500px', // Adjust width as needed
    height: '500px', // Adjust height as needed

  });

}
trackByTitle(index: number, item: { title: string, link: string }): string {
  return item.title;
}
}
