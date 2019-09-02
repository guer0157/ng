import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "A Test",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg"
    ),
    new Recipe(
      "A Second Test Recipe",
      "A Test",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg"
    ),
    new Recipe(
      "A Third Recipe",
      "A Test",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg"
    )
  ];
  activeRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
  recipeDetails(e) {
    this.activeRecipe = e;
  }
}
