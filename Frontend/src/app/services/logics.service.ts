import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomModel } from 'src/app/models/room.model';
import { environment } from 'src/environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class LogicsService {

  constructor(private http: HttpClient) { }

    public async getAllRooms(): Promise<RoomModel[]> {
        const rooms = await this.http.get<RoomModel[]>(environment.roomsUrl).toPromise();
        return rooms;
    }
    
    public async AddNewRoom(room:RoomModel):Promise<RoomModel>{
      const addedRoom = await this.http.post<RoomModel>(environment.roomsUrl+'/add-room',room).toPromise();
      return addedRoom;
    }
}
