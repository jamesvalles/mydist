import { Message } from './message';

export class Messages {
     messageArray: Message[] = [];
     constructor(){
     }

     addMessage(incomingMessage : Message){
         console.log("Adding message to array.")
        this.messageArray.push(incomingMessage);
     }

     getMessageArray(){
         return this.messageArray
     }
}