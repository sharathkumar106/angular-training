import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showMessage = false;
  errorMessage: string;
  submitted = false;
  loginForm: FormGroup;
  redirectURL: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public get form(): any {
    return this.loginForm.controls;
  }

  login(): void {
    if (this.loginForm.invalid) {
      console.log('Form Invalid: ', this.loginForm.invalid);
      this.showMessage = this.loginForm.invalid;
      this.errorMessage = 'Please fill all the required fields';
      return;
    }
    else {
      this.errorMessage = 'Trying to Login...';
      this.showMessage = true;
      this.authService.login(this.form.username.value, this.form.password.value).then(() => {
        if (this.authService.checkLoginStatus()) {
          console.log('Login successful');
          this.router.navigate([this.authService.redirectURL]);
        }
        else {
          this.showMessage = true;
          this.errorMessage = 'Login Failed. Please try again';
        }
      });

      // else {
      //   this.errorMessage = 'Please check your username and password';
      //   this.showMessage = true;
      // }
    }
  }
}
