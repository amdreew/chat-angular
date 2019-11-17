import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { from, Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  chatSubscrition: Subscription;
  elemento: HTMLElement;
  mensajes: any[] = [];
  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.listenMessage();
  }

  ngOnDestroy(){
    this.chatSubscrition.unsubscribe();
  }

  listenMessage(){
    this.elemento = document.getElementById('chat-mensajes');
    this.chatSubscrition = this.chatService.getMessages().subscribe(msm => {
      
      this.mensajes.push(msm);

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50)
    })
  }

  send(){
    if(this.texto.trim().length === 0 ){
      return;
    }
    this.chatService.sendMessage(this.texto);  
    this.texto = '';
  }

}
