import { Routes } from '@angular/router';
import { ViewEditCustomersComponent } from './components/view-edit-customers/view-edit-customers.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { ViewEditOrdersComponent } from './components/view-edit-orders/view-edit-orders.component';
import { ViewEditSuppliersComponent } from './components/view-edit-suppliers/view-edit-suppliers.component';

export const routes: Routes = [
  { path: 'customers', component: ViewEditCustomersComponent },
  { path: 'products', component: CreateProductsComponent },
  { path: 'orders', component: ViewEditOrdersComponent },
  { path: 'suppliers', component: ViewEditSuppliersComponent },
  { path: 'shipping', component: ViewEditSuppliersComponent },
];
