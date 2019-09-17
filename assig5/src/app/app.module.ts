import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InactiveUsersComponent } from "./inactive-users/inactive-users.component";
import { ActiveUsersComponent } from "./active-users/active-users.component";
import { UserService } from "./users.service";
import { CounterService } from "./counter.service";

@NgModule({
  declarations: [AppComponent, InactiveUsersComponent, ActiveUsersComponent],
  imports: [BrowserModule],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
