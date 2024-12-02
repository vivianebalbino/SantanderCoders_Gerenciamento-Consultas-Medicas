import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule, MAT_SELECT_CONFIG } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill', floatLabel: 'auto' }
    },
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { disableOptionCentering: true }
    }
  ]
})
export class RegisterComponent {
  registrationForm: FormGroup;
  userService: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.saveUser(this.registrationForm.value);
    }
  }

  saveUser(userData: any) {
    this.userService.createUser(userData).subscribe({
      next: (response: any) => {
        console.log('Usuário salvo com sucesso!', response);
        alert('Usuário cadastrado com sucesso!');
        this.registrationForm.reset();
      },
      error: (error: any) => {
        console.error('Erro ao salvar o usuário:', error);
        alert('Erro ao cadastrar o usuário.');
      }
    });
  }
}
