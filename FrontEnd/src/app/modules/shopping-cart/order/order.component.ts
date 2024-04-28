import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {  dataSource = new MatTableDataSource<any>([
  { descripcion: 'Reserva Hotel', cantidad: 1, precio: 500, total: 500 },
  { descripcion: 'Tabla de surf', cantidad: 3, precio: 100, total: 300 },
  { descripcion: 'Balón Volleyball', cantidad: 1, precio: 30, total: 30 },
  { descripcion: 'Reserva Andres Carne de Res', cantidad: 5, precio: 50, total: 250 },
  { descripcion: 'Reserva Tour Ciudad Antigua', cantidad: 5, precio: 100, total: 500 },
  { descripcion: 'Mochila de Camping', cantidad: 2, precio: 75, total: 150 },
  { descripcion: 'Par Tennis de Montañismo', cantidad: 4, precio: 50, total: 200 },
  { descripcion: 'Gorra para tour hidrofóbica', cantidad: 1, precio: 50, total: 50 }
]);

Url: string = 'http://localhost:4200/';

constructor(private http: HttpClient) {
  
}

ngOnInit(): void {}

redirectToOtherComponent(row: any) {}
}