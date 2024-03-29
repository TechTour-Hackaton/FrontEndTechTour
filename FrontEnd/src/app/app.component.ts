import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSpecialPage();
      }
    });
  }

  isSpecialPage(): boolean {
    const currentUrl = this.router.url;
    const loginUrl = '/login';
    const registerUrl = '/register';

    // Verificar si la ruta actual es "/login" o "/recover"
    if (currentUrl === loginUrl || currentUrl === registerUrl) {
      return true;
    }

    return false;
  }
}
