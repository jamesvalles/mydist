//This is the heart of the component 
//Import components here 
import { Component } from '@angular/core';
import {MessagesService} from '../app/messages.service'
import { Message } from './models/message';


//Component decorator, where we can find template, CSS style sheet
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Component logic  
export class AppComponent {
  messageArray : Message[] = []; 

  constructor(private _messagesService : MessagesService) { 

  }
  title = 'mydist';

  ngOnInit(){
  this._messagesService.createMessages();
  this.messageArray = this._messagesService.getMessageArray();
  console.log("Messages loaded.")
}
}
