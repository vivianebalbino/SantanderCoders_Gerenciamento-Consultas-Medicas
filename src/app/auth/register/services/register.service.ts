import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = "http://localhost:3000/auth";

  constructor(private http: HttpClient) {}

  createUser(user: Register): Observable<any> {
    return this.http.post<void>(`${this.apiUrl}/register`, user);
  }
}
