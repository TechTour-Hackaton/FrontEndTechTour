import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrl: './list-plans.component.css'
})
export class ListPlansComponent {
  @ViewChild('carruselRef') carrusel!: ElementRef;

  constructor() {}

  scrollLeft(): void {
    this.carrusel.nativeElement.scrollBy({ left: -350, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.carrusel.nativeElement.scrollBy({ left: 350, behavior: 'smooth' });
  }
}
