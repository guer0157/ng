import { Component, OnInit } from "@angular/core";
import { UserService } from "../users.service";
import { CounterService } from "../counter.service";
@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"]
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  setToActive(index: number, user: string) {
    this.userService.setToActive(index, user);
    // this.counterService.counterEmmiter.emit(true);
    this.counterService.checkCount(true);
  }
}
