import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails=false;
  buttonClicks: any[]=[];
  
  showDetails=()=>{
    this.displayDetails=!this.displayDetails;
    let addToClicks=this.buttonClicks.length
    addToClicks++
    this.buttonClicks.push(addToClicks);
    console.log(this.buttonClicks)
  }

}
