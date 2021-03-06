import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit() {}
  onAddServer() {
    console.log("this. onAddServer");
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
  onAddBlueprint() {
    console.log("this. onAddBlueprint");
    this.blueprintAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
