import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  likeImage: boolean = false;

  constructor(private _myservice : MyServiceService) { }

  ngOnInit() {
  }

  clickedButton(){
    console.log(this.likeImage);
    console.log(this._myservice.likeImage(this.likeImage));
    this.likeImage = this._myservice.likeImage(this.likeImage);
    return this.likeImage;
  }

  setClass(){
    return{
      'is-liked': this.likeImage == true,
      'not-liked':this.likeImage == false,
    }
  }

}

