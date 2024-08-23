import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
@Component({
  selector: 'app-view-edit-orders',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './view-edit-orders.component.html',
  styleUrl: './view-edit-orders.component.css'
})
export class ViewEditOrdersComponent {

}
