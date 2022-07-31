import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';
import { LogicsService } from 'src/app/services/logics.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
    public room = new RoomModel();
    public user = new UserModel();
  constructor(private logicService:LogicsService) {  }
    public async addRoom(){
        try{
          const newRoom = await this.logicService.AddNewRoom(this.room);

        }catch(err:any)
        {
            console.log(err.message);
        }
    }
  ngOnInit(): void {
  }

}
