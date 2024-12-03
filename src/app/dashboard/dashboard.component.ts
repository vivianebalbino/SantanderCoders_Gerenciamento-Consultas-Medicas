import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../shared/services/appointments.service';
import { AuthService } from '../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any = null;
  appointments: any[] = [];
  user: any;

  constructor(
    private appointmentsService: AppointmentsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.appointmentsService.getAppointments().subscribe(
      (data) => {
        this.appointments = data; 
        console.log(this.appointments);
      },
      (error) => {
        console.error('Erro ao buscar consultas:', error);
      }
    );
  }

  loadAppointments(): void {
    this.appointmentsService.getAppointments().subscribe((appointments) => {
      console.log(this.appointments)
      this.appointments = this.user.profile === 'ADMIN'
        ? appointments
        : appointments.filter((a) => a.userId === this.user.id);
    });
  }

  markAsDone(appointment: any): void {
    if (appointment.status === 'SCHEDULED') {
      debugger
      this.appointmentsService
        .updateAppointment(appointment.id, { status: 'DONE' })
        .subscribe(() => this.loadAppointments());
    }
  }

  cancelAppointment(appointment: any): void {
    if (appointment.status === 'SCHEDULED') {
      this.appointmentsService
        .updateAppointment(appointment.id, { status: 'CANCELED' })
        .subscribe(() => this.loadAppointments());
    }
  }
}
