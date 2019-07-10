import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeServise {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test recipe1', 'dsds', 'https://www.maxpixel.net/static/photo/640/Thai-Food-Asian-Meal-Fried-Noodles-Noodle-518035.jpg', [new Ingredient('meat', 1), new Ingredient('dsds', 2 )]),
    new Recipe('A Test recipe2', 'dsxxzxzds', 'https://www.maxpixel.net/static/photo/640/Thai-Food-Asian-Meal-Fried-Noodles-Noodle-518035.jpg', [new Ingredient('dsds', 3), new Ingredient('dxzxzsds', 22 )] )
  ];
  // noinspection JSAnnotator
  constructor(private slService: ShoppingListService) {};

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    }

}
