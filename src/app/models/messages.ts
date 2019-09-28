import { Message } from './message';

export class Messages {
     messageArray : Message[];

     constructor(){
     }

     addMessage(incomingMessage : Message){
        this.messageArray.push(incomingMessage);
     }

     getMessages(){
         return this.messageArray
     }
}