import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipesService {
  private _recipes: Recipe[] = [];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this._recipes = recipes;
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    this._recipes[id] = newRecipe;
  }

  deleteRecipe(id) {
    this._recipes.splice(id, 1);
  }
}
