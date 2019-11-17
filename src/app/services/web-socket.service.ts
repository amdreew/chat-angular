import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;
  constructor(public socket: Socket) {
    this.checkStatus();
   }

  checkStatus(){
    this.socket.on('connect', () =>{
      console.log('conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () =>{
      console.log('cliente desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: any ){
    console.log(`emitiendo evento ${event}`);
    this.socket.emit(event, payload, callback);
  }

  listen(event : string){
    return this.socket.fromEvent(event);
  }
}
