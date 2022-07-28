import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HomeComponent } from './components/layout-area/home/home.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { FormsModule } from '@angular/forms';
import { DoctorCardComponent } from './components/doctor-area/doctor-card/doctor-card.component';
import { DoctorListComponent } from './components/doctor-area/doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AuthMenuComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    DoctorCardComponent,
    DoctorListComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
