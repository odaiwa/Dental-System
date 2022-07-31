import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { DoctorListComponent } from './components/doctor-area/doctor-list/doctor-list.component';
import { HomeComponent } from './components/layout-area/home/home.component';
import { AddRoomComponent } from './components/room-area/add-room/add-room.component';
import { RoomsListComponent } from './components/room-area/rooms-list/rooms-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "home", component: HomeComponent },
  { path: "docs-list", component: DoctorListComponent },
  { path: "add-room", component: AddRoomComponent },
  { path: "rooms", component: RoomsListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
