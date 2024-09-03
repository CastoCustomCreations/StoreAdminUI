import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatHeaderCellDef, MatCellDef } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-read-customers',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCellDef, MatHeaderCellDef],
  templateUrl: './read-customers.component.html',
  styleUrl: './read-customers.component.css'
})
export class ReadCustomersComponent implements OnInit {
  customers: Customer[] = [];
  displayedColumns: string[] = [
    'Id', 'First Name', 'Last Name', 'Address1', 'Address2',
    'City', 'State', 'Zipcode', 'Phone',
    'email'
  ];


  constructor(private CustomerService: CustomerService) { }

  ngOnInit(): void {
    this.CustomerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });

    this.CustomerService.getCustomersUpdateListener().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

}
