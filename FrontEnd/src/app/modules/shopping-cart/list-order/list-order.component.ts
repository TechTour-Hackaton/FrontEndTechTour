import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.css',
})
export class ListOrderComponent {
  dataSource = new MatTableDataSource<any>([
    { destino: 'Cartagena', cantidad: 5, fechaInicio: '2024-04-01', fechaTermina: '2024-04-07' },
    { destino: 'Bogotá', cantidad: 10, fechaInicio: '2024-05-15', fechaTermina: '2024-05-22' },
    { destino: 'Medellín', cantidad: 8, fechaInicio: '2024-06-10', fechaTermina: '2024-06-18' },
    { destino: 'Cali', cantidad: 6, fechaInicio: '2024-07-03', fechaTermina: '2024-07-10' },
    { destino: 'Santa Marta', cantidad: 12, fechaInicio: '2024-08-20', fechaTermina: '2024-08-27' },
    { destino: 'San José', cantidad: 15, fechaInicio: '2024-09-05', fechaTermina: '2024-09-12' },
    { destino: 'Liberia', cantidad: 7, fechaInicio: '2024-10-18', fechaTermina: '2024-10-25' },
    { destino: 'Puerto Limón', cantidad: 4, fechaInicio: '2024-11-12', fechaTermina: '2024-11-19' },
    { destino: 'Tamarindo', cantidad: 9, fechaInicio: '2024-12-03', fechaTermina: '2024-12-10' },
    { destino: 'Monteverde', cantidad: 11, fechaInicio: '2025-01-20', fechaTermina: '2025-01-27' }
  ]);

  redirectToOtherComponent(row: any) {
  }
}