import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;
  constructor() {}

  ngOnInit() {
    console.log("name", this.nameInput.nativeElement.value);
    console.log("amount", this.amountInput.nativeElement.value);
  }
  getValue(e) {
    e.preventDefault();
    console.log("name", this.nameInput.nativeElement.value);
    console.log("amount", this.amountInput.nativeElement.value);
  }
  add(ev) {
    ev.preventDefault();
  }
  delete(ev) {
    ev.preventDefault();
  }
  clear(ev) {
    ev.preventDefault();
  }
}
