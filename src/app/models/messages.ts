import { Message } from './message';
import { IMessages} from '../models/imessages'

export class Messages implements IMessages{
     messageArray: Message[] = [];
     constructor(){
     }

     addMessage(incomingMessage : Message){
         console.log("Adding message to array.")
        this.messageArray.push(incomingMessage);
     }

     getMessageArray() : Message[]{
         return this.messageArray
     }
}