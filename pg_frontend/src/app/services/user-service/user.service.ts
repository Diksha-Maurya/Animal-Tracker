import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  onLogin(obj: any) {
    let response = this.http.post('http://localhost:8080/api/auth/signin', obj);
    return response;
  }

  onSignUp(obj: any) {
    let response = this.http.post('http://localhost:8080/api/auth/signup', obj);
    return response;
  }

  private valueSubject = new BehaviorSubject<string>(''); // You can set an initial value

  setValue(newValue: string) {
    this.valueSubject.next(newValue);
  }

  getValue() {
    return this.valueSubject.asObservable();
  }

}
