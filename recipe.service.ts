import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient) { }

  // Add these inside the RecipeService class
  addRecipe(recipe: any): Observable<any> {
    return this.http.post(this.apiUrl, recipe);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
