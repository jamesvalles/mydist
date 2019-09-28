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
    var message1 = new Message("5:45pm", "Hey, can you do me favor an like Pierre's picture."); 
    var message2 = new Message("5:50pm", "Thank you for liking his picture! You rock."); 
    var message3 = new Message("6:00pm", "What's for dinner?"); 
    var message4 = new Message("6:15pm", "Hotdogs!");  
    
    this.messageArray.addMessage(message1);
    this.messageArray.addMessage(message2);
    this.messageArray.addMessage(message3);
    this.messageArray.addMessage(message4);   
  }

  getMessageArray(){
    return this.messageArray;
  }
}
