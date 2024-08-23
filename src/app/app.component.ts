import { Component} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewEditCustomersComponent } from './components/view-edit-customers/view-edit-customers.component';
import { ViewEditOrdersComponent } from './components/view-edit-orders/view-edit-orders.component';
import { ViewEditProductsComponent } from './components/view-edit-products/view-edit-products.component';
import { ViewEditSuppliersComponent } from './components/view-edit-suppliers/view-edit-suppliers.component';
import { ViewEditShippersComponent } from './components/view-edit-shippers/view-edit-shippers.component';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, MatSidenavModule, MatTabsModule, ViewEditCustomersComponent, ViewEditProductsComponent, ViewEditSuppliersComponent, ViewEditShippersComponent, ViewEditOrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StoreAdminUI';
  constructor(private dialog: MatDialog) {}

  openCustomers() {
    this.dialog.open(ViewEditCustomersComponent, {
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
  this.dialog.open(ViewEditProductsComponent, {
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
