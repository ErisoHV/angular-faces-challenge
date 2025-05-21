import { Component, OnInit  } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-adorable-face',
  templateUrl: './adorable-face.component.html',
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  styleUrls: ['./adorable-face.component.css']
})
export class AdorableFaceComponent implements OnInit {
  myFace = ""
  dynamicBR = 0 + "px"
  seed: number = 0;
  style: string = "lorelei"

  constructor() { }

  ngOnInit() {
    this.generateAdorableFace();
  }

  generateAdorableFace(){
    this.seed = Math.floor(Math.random() * 5000) + 1;
    this.myFace = `https://api.dicebear.com/9.x/${this.style}/svg?seed=${this.seed}`;
  }

  changeBorder(event:any){
    this.seed = Math.floor(Math.random() * 5000) + 1
    this.dynamicBR = event.srcElement.value + "px"
  }

}
