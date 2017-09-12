import { Component, OnInit, NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adorable-face',
  templateUrl: './adorable-face.component.html',
  styleUrls: ['./adorable-face.component.css']
})
export class AdorableFaceComponent implements OnInit {
  myFace = ""
  dynamicBR = 0 + "px"
  public static get ADORABLE_URL(): string { return "https://api.adorable.io/avatars/"};

  constructor() { }

  ngOnInit() {
   this.myFace = AdorableFaceComponent.ADORABLE_URL + "4.png"
    setInterval(()=>{
      this.myFace = this.generateAdorableFace();
    }, 2000);
  }

  generateAdorableFace(){
    let random = Math.floor(Math.random() * 5000) + 1;
    return AdorableFaceComponent.ADORABLE_URL + random + ".png";
  }

  changeBorder(event){
    this.dynamicBR = event.srcElement.value + "px"
  }

}
