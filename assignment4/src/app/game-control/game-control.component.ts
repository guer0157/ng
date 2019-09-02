import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() startGameEmiter = new EventEmitter<Number>();
  @Output() endGameEmiter = new EventEmitter<Number>();
  i = 0;
  interval: NodeJS.Timer;
  constructor() {}

  ngOnInit() {}
  startGame(e) {
    if (e) {
      let bindFunc = (i => {
        this.i++;
        this.endGameEmiter.emit(this.i);
      }).bind(this.i);
      this.interval = setInterval(bindFunc, 1000);
    } else {
      console.log("stop");
      this.endGameEmiter.emit(this.i);
      clearInterval(this.interval);
    }
  }
}
