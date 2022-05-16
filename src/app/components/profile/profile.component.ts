import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  file: any;
  editProfile: boolean = false;
  showSubmitRecipe: boolean = false;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    router: Router,
    private http: HttpClient
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
  showEdit() {
    this.editProfile = true;
    this.showSubmitRecipe = false;
  }
  showSumbitRecipe() {
    this.showSubmitRecipe = true;
    this.editProfile = false;
  }
  submit() {
    this.editProfile = false;
  }
  getFile(event: any) {
    this.file = event.target.files[0];
  }
  uploadFile() {
    let formData = new FormData();
    formData.set('file', this.file);

    //call Api
    this.http
      .post('http://localhost:3001/upload/uploadFiles', formData)
      .subscribe((response) => {});
  }
  submitRecipe() {
    this.showSubmitRecipe = false;
  }
}
