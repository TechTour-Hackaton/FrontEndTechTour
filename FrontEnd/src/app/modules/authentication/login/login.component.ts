import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login(): void {
    const userData: any = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8000/auth/login', userData)
      .subscribe(
        (response: any) => {
          console.log('Inicio de sesión exitoso:', response);
          localStorage.setItem('token', response.access_token);
          this.router.navigateByUrl('/main');
        },
        (error: any) => {
          console.error('Error al iniciar sesión:', error);
          this.loginError = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        }
      );
  }

  redirectToMain(): void {
    this.router.navigateByUrl('/main');
  }
}
