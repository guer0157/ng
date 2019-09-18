import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isActive: number = 0;
  isInactive: number = 0;
  constructor(private counterService: CounterService) {}
  ngOnInit() {
    this.counterService.counterEmmiter.subscribe(() => {
      this.isActive = this.counterService.ToActiveclickCounter;
      this.isInactive = this.counterService.ToInactiveclickCounter;
    });
  }
}
