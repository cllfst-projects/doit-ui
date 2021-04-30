import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CardsComponent } from './components/cards/cards.component';

export const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path : 'signup', component: SignupComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'loggedIn', component: CardsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
