import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  // { path: 'register', component: RegisterComponent },  
  // { path: '', redirectTo: '/register', pathMatch: 'full' } 
  { path: 'dashboard', component: DashboardComponent },  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
    
}

