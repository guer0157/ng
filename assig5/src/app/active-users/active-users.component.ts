import { Component, OnInit } from "@angular/core";
import { UserService } from "../users.service";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"]
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
  setToInactive(index: number, user: string) {
    this.userService.setToInactive(index, user);
    // this.counterService.counterEmmiter.emit(false);
    this.counterService.checkCount(false);
  }
}
