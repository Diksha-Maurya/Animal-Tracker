import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementDataService {

  constructor(private http: HttpClient) {

  }

  getMovementData() {
    let response = this.http.get('http://localhost:8080/api/auth/movementdata');
    return response;
  }
}
