import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeServise} from '../recipe.servise';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeServise: RecipeServise) { }

  ngOnInit() {
    this.recipes = this.recipeServise.getRecipes();
  }

}
