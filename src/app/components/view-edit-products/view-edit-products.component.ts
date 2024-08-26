import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-view-edit-products',
  standalone: true,
  imports: [CommonModule,  MatCardModule, ReactiveFormsModule, HttpClientModule,MatTableModule ],
  templateUrl: './view-edit-products.component.html',
  styleUrl: './view-edit-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewEditProductsComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      units: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]]
    });

    this.productForm.valueChanges.subscribe(value => {
      console.log(this.productForm);
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.http.post('http://localhost:5050/api/Products', this.productForm.value)
        .subscribe(response => {
          console.log('Product data saved successfully:', response);
        }, error => {
          console.error('Error sending customer data:', error);
        });
    }
  }
}
