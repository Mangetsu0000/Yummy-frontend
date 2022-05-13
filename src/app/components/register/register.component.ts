import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  }

  submit(): void {
    this.authService.signup(this.form.getRawValue()).subscribe((res) => {
      this.router.navigate(['/login']);
      console.log('Sigup res>>>>', res);
    });
  }
}
