import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes: any[] = [];
  isAdmin = false;
  isLoading = true; // Properly placed inside the class

  // Model for the "New Recipe" form
  newRecipe = {
    title: '',
    description: '',
    temp: 'Hot',
    flavor: 'Sweet',
    emoji: '🥭',
    image: 'images/rasam.jpeg'
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Fetch failed", err);
        this.isLoading = false;
      }
    });
  }

  toggleAdmin() {
    if (this.isAdmin) {
      this.isAdmin = false;
    } else {
      const pass = prompt("Enter Admin Password:");
      if (pass === 'mango123') {
        this.isAdmin = true;
      } else {
        alert("Wrong password!");
      }
    }
  }

  submitRecipe() {
    this.recipeService.addRecipe(this.newRecipe).subscribe({
      next: () => {
        this.loadRecipes(); // Refresh the list
        alert("Recipe Added!");
        // Reset form to defaults
        this.newRecipe = {
          title: '', description: '', temp: 'Hot',
          flavor: 'Sweet', emoji: '🥭', image: 'images/rasam.jpeg'
        };
      },
      error: (err) => alert("Failed to add recipe")
    });
  }

  removeRecipe(id: string) {
    if(confirm("Delete this recipe?")) {
      this.recipeService.deleteRecipe(id).subscribe({
        next: () => this.loadRecipes(),
        error: (err) => alert("Failed to delete")
      });
    }
  }
}
