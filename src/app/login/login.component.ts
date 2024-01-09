// src/app/login/login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin(): void {
    console.log('Login data:', { username: this.username, password: this.password });
    // TODO: Implement login logic
  }
}
