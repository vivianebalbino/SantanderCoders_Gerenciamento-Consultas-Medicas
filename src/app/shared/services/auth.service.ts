import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor() {}

 
  setCurrentUser(user: any): void {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  
  getCurrentUser(): any {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    }
    return this.currentUser;
  }

  
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

 
  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }
}
