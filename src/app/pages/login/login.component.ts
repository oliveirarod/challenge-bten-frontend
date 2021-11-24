import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private restApi: DashboardService) { }

  isLogin: boolean = true;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {}

  onLoginSubmit() {
    const formData = this.loginForm.getRawValue();

    if (formData.email == 'admin' && formData.password == 'admin') {
      this.router.navigate(['dashboard']);
    }
  }

  onSignupSubmit() {
    const formData = this.signupForm.getRawValue();

    if (this.signupForm.valid) {
      this.restApi.createUser(formData);
      this.router.navigate(['dashboard']);
    }
  }
}
