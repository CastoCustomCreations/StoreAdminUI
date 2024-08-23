import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-view-edit-customers',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule,  MatCardModule],
  templateUrl: './view-edit-customers.component.html',
  styleUrl: './view-edit-customers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewEditCustomersComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.http.post('http://localhost:5050/api/Customers', this.signUpForm.value)
        .subscribe(response => {
          console.log('Customer data sent successfully:', response);
        }, error => {
          console.error('Error sending customer data:', error);
        });
    }
  }
}
