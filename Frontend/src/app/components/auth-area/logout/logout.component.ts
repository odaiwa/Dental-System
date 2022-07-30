import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  template: ""
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
      this.authService.logout();
      console.log("התנקת מהמערכת");
      this.router.navigateByUrl("/home");
  }
}
