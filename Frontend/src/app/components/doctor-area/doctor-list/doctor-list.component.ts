import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/doctor.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  public doctors: DoctorModel[];
  constructor(private userService: UserService) { }

  async ngOnInit() {
    try {
      this.doctors = await this.userService.getAllDoctorsAsync();
    }
    catch (err: any) {
      console.log(err.message);
    }
  }

}
