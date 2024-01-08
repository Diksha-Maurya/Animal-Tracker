import { Component } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  loginForm: any;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.loading = true;

    let userObject = {
      "username": this.loginForm.get('email').value,
      "password": this.loginForm.get('password').value
    }
    this.submitted = true;

    this.userService.onLogin(userObject).subscribe(response => {
      if ('accessToken' in response && 'username' in response) {
        localStorage.setItem('accessToken', String(response.accessToken));
        localStorage.setItem('userName', String(response.username));
        this.setValue(response.username);
        this.router.navigate(['/dashboard']);
      }
    }, (error) => {
      this.loading = false;
      this.openDialog();
    });

    if (this.loginForm.invalid) {
      return;
    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent)
  }

  setValue(emailid) {
    this.userService.setValue(emailid);
  }

}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContent { }
