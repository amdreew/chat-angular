import { Component } from '@angular/core';
import { WebSocketService } from './services/web-socket.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ioone';
  constructor(private socket: WebSocketService ) {

  }
}
