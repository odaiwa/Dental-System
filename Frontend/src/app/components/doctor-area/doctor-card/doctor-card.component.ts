import { Component, Input, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {

  constructor() { }

  @Input()
  public doctor:DoctorModel;

  ngOnInit(): void {
  }

}
