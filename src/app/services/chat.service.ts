import { Injectable } from '@angular/core';
import { WebSocketService } from  './web-socket.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private ws: WebSocketService) { }

  sendMessage(msm: string){
    const payload = {
      of: 'andres',
      body: msm
    }
    this.ws.emit('mensaje', payload);
  }

  getMessages(){
    return this.ws.listen('new-message');
  }

}
