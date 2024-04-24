import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {  dataSource = new MatTableDataSource<any>([
  { descripcion: 'Producto A', cantidad: 10, precio: 20, total: 200 },
  { descripcion: 'Producto B', cantidad: 5, precio: 30, total: 150 },
  { descripcion: 'Producto C', cantidad: 8, precio: 25, total: 200 },
  { descripcion: 'Producto D', cantidad: 12, precio: 15, total: 180 },
  { descripcion: 'Producto E', cantidad: 6, precio: 40, total: 240 },
  { descripcion: 'Producto F', cantidad: 15, precio: 10, total: 150 },
  { descripcion: 'Producto G', cantidad: 20, precio: 8, total: 160 },
  { descripcion: 'Producto H', cantidad: 3, precio: 50, total: 150 },
  { descripcion: 'Producto I', cantidad: 7, precio: 35, total: 245 },
  { descripcion: 'Producto J', cantidad: 9, precio: 28, total: 252 },
]);

constructor() {}

ngOnInit(): void {}

redirectToOtherComponent(row: any) {}
}