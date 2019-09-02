import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  setTimeOutNumber: number;
  isEven: boolean;
  isGameStarted(e) {
    console.log(e, "game stated in app");
  }
  isGameEnded(e) {
    if (e % 2 === 0) {
      this.isEven = true;
      this.setTimeOutNumber = e;
    } else {
      this.isEven = false;
      this.setTimeOutNumber = e;
    }
  }
}
