import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm;
  error;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  // invoked on form-submission/sign-up
  onSubmit() {
    let signUpObject = {
      "username": this.signupForm.get('email').value,
      "email": this.signupForm.get('email').value,
      "password": this.signupForm.get('password').value,
      "role": [this.signupForm.get('role').value],
    }

    this.userService.onSignUp(signUpObject).subscribe(response => {
      if('message' in response){
        if(response.message == 'User registered successfully!'){
          this._snackBar.open('User Created Successfully', 'OK');
          this.router.navigate(['/'])
        }
      }
    },(error)=>{
      this._snackBar.open('Try Again', 'OK');
    })
  }

}
