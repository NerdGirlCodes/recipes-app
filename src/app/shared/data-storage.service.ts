import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const requests = {
  recipes: 'recipes.json',
  url: 'https://recipes-app-b4d95.firebaseio.com/'
};

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) {}

  saveRecipes(): void {
    const recipes = this.recipesService.recipes;
    this.http.put(`${requests.url}${requests.recipes}`, recipes)
      .subscribe(response => console.log(response));
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(`${requests.url}${requests.recipes}`)
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes.map((recipe: Recipe) => {
            const ingredients = recipe.ingredients || [];

            return {...recipe, ingredients};
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }
}