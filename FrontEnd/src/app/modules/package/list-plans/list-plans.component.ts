import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrls: ['./list-plans.component.css']
})
export class ListPlansComponent {
  @ViewChild('carruselRef') carrusel!: ElementRef;
  plans: Plan[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    // Realizar una solicitud GET al backend para recuperar los datos de los planes
    this.http.get<Plan[]>('http://localhost:8000/plans')
      .subscribe(
        (response: Plan[]) => {
          this.plans = response;
          console.log('Planes cargados:', this.plans);
        },
        (error: any) => {
          console.error('Error al cargar planes:', error);
        }
      );
  }

  scrollLeft(): void {
    this.carrusel.nativeElement.scrollBy({ left: -350, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.carrusel.nativeElement.scrollBy({ left: 350, behavior: 'smooth' });
  }
}
