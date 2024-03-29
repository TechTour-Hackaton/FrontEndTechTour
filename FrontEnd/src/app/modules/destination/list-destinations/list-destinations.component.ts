import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-destinations',
  templateUrl: './list-destinations.component.html',
  styleUrl: './list-destinations.component.css',
})
export class ListDestinationsComponent {
  dataSource = new MatTableDataSource<any>([
    {
      lugar: 'Ciudad de México',
      cantidadPlanes: 10,
      valor: '$5000',
      atractivoTuristico: 'Palacio de Bellas Artes',
      clima: 'Soleado',
    },
    {
      lugar: 'Nueva York',
      cantidadPlanes: 15,
      valor: '$7000',
      atractivoTuristico: 'Estatua de la Libertad',
      clima: 'Nublado',
    },
    {
      lugar: 'París',
      cantidadPlanes: 20,
      valor: '€6000',
      atractivoTuristico: 'Torre Eiffel',
      clima: 'Lluvioso',
    },
    {
      lugar: 'Roma',
      cantidadPlanes: 18,
      valor: '€5500',
      atractivoTuristico: 'Coliseo Romano',
      clima: 'Nublado',
    },
    {
      lugar: 'Tokio',
      cantidadPlanes: 12,
      valor: '¥65000',
      atractivoTuristico: 'Tokyo Skytree',
      clima: 'Soleado',
    },
    {
      lugar: 'Río de Janeiro',
      cantidadPlanes: 25,
      valor: 'R$8000',
      atractivoTuristico: 'Cristo Redentor',
      clima: 'Lluvioso',
    },
    {
      lugar: 'Barcelona',
      cantidadPlanes: 22,
      valor: '€6200',
      atractivoTuristico: 'Sagrada Familia',
      clima: 'Soleado',
    },
    {
      lugar: 'Sidney',
      cantidadPlanes: 17,
      valor: '$7500',
      atractivoTuristico: 'Opera House',
      clima: 'Nublado',
    },
    {
      lugar: 'Estambul',
      cantidadPlanes: 14,
      valor: '₺7000',
      atractivoTuristico: 'Mezquita Azul',
      clima: 'Soleado',
    },
    {
      lugar: 'Praga',
      cantidadPlanes: 16,
      valor: 'Kč5500',
      atractivoTuristico: 'Ciudad Vieja',
      clima: 'Nublado',
    },
  ]);
  



  constructor() {}

  ngOnInit(): void {
  }

  onPageChange(event: any) {
  }

  redirectToOtherComponent(row: any) {
  }
}
