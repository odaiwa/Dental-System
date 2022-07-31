import { Component, OnInit } from '@angular/core';
import { LogicsService } from 'src/app/services/logics.service';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  constructor(private logicService:LogicsService) { }
    public rooms : RoomModel[];

  async ngOnInit() {
    try{
      this.rooms = await this.logicService.getAllRooms();
    }catch(err:any)
    {
      console.log(err);
    }
  }

}
