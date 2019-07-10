import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {RecipeServise} from './recipe.servise';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServise]
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  selectedRecipe: Recipe;
  constructor(private recipeServise: RecipeServise) { }

  ngOnInit() {
    this.recipeServise.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
