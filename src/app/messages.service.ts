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
    var user1 = new User("James");
    var user2 = new User("Leo");

    var message1 = new Message("5:45 p.m.", "Hey, can you do me favor and like Pierre's picture.", user1.name); 
    var message2 = new Message("5:50 p.m.", "Thank you for liking his picture! You rock.", user2.name); 
    var message3 = new Message("6:00 p.m.", "We're on our way home. What's for dinner?", user1.name); 
    var message4 = new Message("6:15 p.m.", "Hot dogs!", user1.name);  
    
    this.messageArray.addMessage(message1);
    this.messageArray.addMessage(message2);
    this.messageArray.addMessage(message3);
    this.messageArray.addMessage(message4);   
  }

  getMessageArray(): Message[] {
    return this.messageArray.getMessageArray();
  }
}
