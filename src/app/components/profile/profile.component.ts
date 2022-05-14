import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInist(): void {
    this.userService.getMe().subscribe(
      (res) =>
        (this.form = new FormGroup({
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
        }))
    );
  }

  ngOnInit(): void {
    this.userService.getMe().subscribe((res) => {
      this.form = this.formBuilder.group({
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
      });
    });
  }
}
