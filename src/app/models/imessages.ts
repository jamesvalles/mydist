import { Message } from './message';

export interface IMessages{
    messageArray: Message[];
    addMessage(incomingMessage : Message) : void;
    getMessageArray() : Message[];    
}