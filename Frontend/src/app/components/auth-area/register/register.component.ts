import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RoleModel } from 'src/app/models/roles.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new UserModel();
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  public roles:RoleModel[];

  async ngOnInit() {
    this.roles = await this.userService.getAllRolesAsync();
  }
  public async register() {
    try {
      console.log(this.user);
      await this.authService.register(this.user);
      console.log("חשבון נוצר בהצלחה");
      this.router.navigateByUrl("/home");
    } catch (err: any) {
      if (err.status === 500) {
        console.log(err.message)
      }
    }
  }
}
