import {User} from '../models/user'

export class Message {
    timeStamp : string; 
    messageText: string; 
    user : string;

    constructor(timeStamp : string, messageText: string, user: string){
        this.timeStamp = timeStamp;
        this.messageText = messageText; 
        this.user = user;
    }
}

