import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getAllRecipes() {
    return this.http.get<any>(`${apiUrl}/recipes`).pipe(
      map((recipes) => {
        console.log('Recipes>>>', recipes);
        return recipes;
      })
    );
  }
}
