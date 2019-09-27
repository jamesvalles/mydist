import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  likeImage: boolean = false;
  counter: number = 0; 

  constructor(private _myservice : MyServiceService) { }

  ngOnInit() {
  }

  clickedButton(){
    console.log(this.likeImage);
    console.log(this._myservice.likeImage(this.likeImage));
    this.likeImage = this._myservice.likeImage(this.likeImage);
    if(this.likeImage){
    this.counter = this.counter + 1; 
    }
    return this.likeImage;
  }

  setClass(){
    return{
      'is-liked': this.likeImage == true,
      'not-liked':this.likeImage == false,
    }
  }

}

