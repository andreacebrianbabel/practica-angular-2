import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(){}

  login() {
    localStorage.setItem('usuario', this.loginForm.value.email);
  }
}