import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeServise} from '../recipe.servise';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeServise) { }

  ngOnInit() {
  }

  AddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
