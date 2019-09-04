import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Input() selectedIngredient: Ingredient;
  constructor() {}

  ngOnInit() {}
  add(ev) {
    ev.preventDefault();
    this.addIngredient.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
  delete(ev) {
    ev.preventDefault();
  }
  clear(ev) {
    ev.preventDefault();
    this.nameInput.nativeElement.value = "";
    this.amountInput.nativeElement.value = "";
  }
}
