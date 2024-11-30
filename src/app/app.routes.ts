import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';


export const routes: Routes = [
  { path: 'register', component: RegisterComponent },  // Certifique-se de que a rota está correta
  { path: '', redirectTo: '/register', pathMatch: 'full' }  // Rota padrão para redirecionar para o registro
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
    
}

