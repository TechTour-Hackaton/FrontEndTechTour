import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) { }

  registerUser(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    const newUser = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8000/auth/register', newUser)
      .subscribe(
        (response: any) => {
          console.log('Usuario registrado exitosamente:', response);
          // Puedes agregar aquí la redirección a la página de inicio de sesión o cualquier otra página necesaria
        },
        (error: any) => {
          console.error('Error al registrar usuario:', error);
        }
      );
  }
}
