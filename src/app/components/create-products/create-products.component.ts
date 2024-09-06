import { Component, ChangeDetectionStrategy , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [CommonModule,  MatCardModule, ReactiveFormsModule, HttpClientModule,MatTableModule ],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductsComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      Name: ['', Validators.required],
      Price: ['', [Validators.required, Validators.min(1)]],
      CategoryId: ['', [Validators.required, Validators.min(0)]],
      Description: ['', Validators.required],
      ImageOne: ['', [Validators.required]],
      ImageTwo: ['', ],
      ImageThree: ['', ],
      ImageFour: ['', ],
      ImageFive: ['', ],
      UnitsInStock: ['', [Validators.required, Validators.min(1)]],
      UnitsOnOrder: ['', [Validators.required, Validators.min(0)]],
      UnitsReorderLevel: ['', [Validators.required, Validators.min(0)]],
      SupplierId: ['', ],
      UnitsSold: ['', ],
      UnitWeight: ['', [Validators.required, Validators.min(0)]],
      UnitDimensions: ['', Validators.required],
      UnitCost: ['', [Validators.required, Validators.min(0)]]
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



