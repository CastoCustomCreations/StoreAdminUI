import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5050/api/customers/';
  private customersUpdated = new Subject<Customer[]>();

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  getCustomersUpdateListener(): Observable<Customer[]> {
    return this.customersUpdated.asObservable();
  }

  fetchCustomers(): void {
    this.http.get<Customer[]>(this.apiUrl).subscribe((customers) => {
      this.customersUpdated.next(customers);
    });
  }
}
