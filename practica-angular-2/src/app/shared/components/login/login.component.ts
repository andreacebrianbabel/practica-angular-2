import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    email: ['prueba123@gmail.com']
  });

  constructor(private fb: FormBuilder) {}

  login() {
    localStorage.setItem('usuario', JSON.stringify(this.loginForm.value));
  }

}