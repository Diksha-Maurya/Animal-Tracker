import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user-service/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataTableComponent } from '../data-table/data-table.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  //imports: [MatButtonModule, MatMenuModule],
})
export class NavBarComponent {
  userName: string = '';

  constructor(private router: Router, public dialog: MatDialog) {
    if (localStorage.getItem('userName') != null) {
      const storedValue = localStorage.getItem('userName');
      if (storedValue != null) {
        this.userName = storedValue;
      }
    }
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    this.router.navigate(['/']);
  }

  openDialog() {
    this.dialog.open(DataTableComponent);
  }
}
