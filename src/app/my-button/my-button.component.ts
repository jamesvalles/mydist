import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickedButton(){
    var likeImage = false
    console.log(likeImage)
  }

}
