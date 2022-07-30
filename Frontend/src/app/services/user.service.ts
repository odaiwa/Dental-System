import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DoctorModel } from '../models/doctor.model';
import { RoleModel } from '../models/roles.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  public async getAllRolesAsync(): Promise<RoleModel[]> {
    const roles = await this.http.get<RoleModel[]>(environment.usersUrl + '/roles').toPromise();
    return roles;
  }
  public async getAllDoctorsAsync():Promise<DoctorModel[]>{
    const doctors = await this.http.get<DoctorModel[]>(environment.usersUrl+'/docs').toPromise();
    return doctors;
  }
}