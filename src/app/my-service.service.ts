import { Injectable } from '@angular/core';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

@Injectable({
  providedIn: 'root'
})

//Service logic goes here 
export class MyServiceService {

  constructor() { }

  likeImage(booleanVariable: boolean){
    if(booleanVariable == false){
      return true;
    }else{
      return false;
    }
  }
}
