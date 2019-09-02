import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isShoppingListActive: Boolean;
  shoppingList() {
    this.isShoppingListActive = true;
    console.log("this worked");
  }
  showRecipeList() {
    this.isShoppingListActive = false;
    console.log("and this worked");
  }
}
