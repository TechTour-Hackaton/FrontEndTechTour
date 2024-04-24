import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Destination {
  lugar: string;
  cantidadPlanes: number;
  valor: string;
  atractivoTuristico: string;
  clima: string;
}

@Component({
  selector: 'app-list-destinations',
  templateUrl: './list-destinations.component.html',
  styleUrls: ['./list-destinations.component.css'],
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
    // Otros destinos
  ]);

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(): void {
    // Realizar una solicitud GET al backend para recuperar los datos de destino
    this.http.get<Destination[]>('http://localhost:8000/destinations')
      .subscribe(
        (response: Destination[]) => {
          this.dataSource = new MatTableDataSource<Destination>(response);
          console.log('Destinos cargados:', this.dataSource.data);
        },
        (error: any) => {
          console.error('Error al cargar destinos:', error);
        }
      );
  }

  redirectToOtherComponent(row: any) {
    this.router.navigate(['/info-destination']);
  }
}