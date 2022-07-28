import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-area/login/login.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { HomeComponent } from './components/layout-area/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
