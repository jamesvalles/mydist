import { Injectable } from '@angular/core';
import {Message} from '../app/models/message';
import {Messages} from '../app/models/messages';
import {User} from '../app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageArray = new Messages();

  constructor() { }

  createMessages(){
    var message1 = new Message("5:45 p.m.", "Hey, can you do me favor and like Pierre's picture.", "James"); 
    var message2 = new Message("5:50 p.m.", "Thank you for liking his picture! You rock.", "Leo"); 
    var message3 = new Message("6:00 p.m.", "We're on our way home. What's for dinner?", "James"); 
    var message4 = new Message("6:15 p.m.", "Hot dogs!", "Leo");  
    
    this.messageArray.addMessage(message1);
    this.messageArray.addMessage(message2);
    this.messageArray.addMessage(message3);
    this.messageArray.addMessage(message4);   
  }

  getMessageArray(): Message[] {
    return this.messageArray.getMessageArray();
  }
}
