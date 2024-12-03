import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})

export class AppointmentsService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments`);
  }

  updateAppointment(id: number, appointment: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.put<any>(url, appointment); 
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/appointments/${id}`);
  }
}
