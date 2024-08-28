import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatHeaderCellDef, MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCellDef, MatHeaderCellDef ],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css',

})

export class ViewProductsComponent implements OnInit {
    products: Product[] = [];
    displayedColumns: string[] = [
      'Id', 'Name', 'Price', 'CategoryId', 'Description',
      'ImageOne', 'ImageTwo', 'ImageThree', 'ImageFour',
      'ImageFive', 'UnitsInStock', 'UnitsOnOrder',
      'UnitsReorderLevel', 'SupplierId', 'UnitsSold',
      'UnitWeight', 'UnitDimensions', 'UnitCost'
    ];


    constructor(private productService: ProductService) { }

    ngOnInit(): void {
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
      });

      this.productService.getProductsUpdateListener().subscribe((products: Product[]) => {
        this.products = products;
      });
    }
  }

