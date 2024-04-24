import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-destination',
  templateUrl: './info-destination.component.html',
  styleUrls: ['./info-destination.component.css']
})
export class InfoDestinationComponent implements OnInit {
  destinations: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(): void {
    // Realizar una solicitud GET al backend para recuperar la información de destino
    this.http.get<any[]>('http://localhost:8000/destinations')
      .subscribe(
        (response: any[]) => {
          this.destinations = response;
          console.log('Destinos cargados:', this.destinations);
        },
        (error: any) => {
          console.error('Error al cargar destinos:', error);
        }
      );
  }
}
