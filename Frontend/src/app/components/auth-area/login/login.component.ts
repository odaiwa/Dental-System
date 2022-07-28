import { Component, OnInit } from '@angular/core';
import { CredentialsModel } from 'src/app/models/credentials.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public credentials = new CredentialsModel();

  constructor(private authService: AuthService, private router: Router) { }
  public hide = true;

  public async login() {
      try { 
          await this.authService.login(this.credentials);
          console.log("התחברת בהצלחה למערכת");
          this.router.navigateByUrl("/home");
      }
      catch(err: any) {
        console.log(err);
      } 
  }

}
