import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails:
    | Recipe
    | {
        name: "Recipe Name";
        description: "Description";
        ImgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg";
      };
  constructor() {}

  ngOnInit() {}
}
