import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe-model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
  @Input() recipe:Recipe;
  
  @Output() recipeObjEmit = new EventEmitter<Recipe>();
  ngOnInit() {

  }
  showRecipeDetails(recipe:Recipe){
    alert("came");
    this.recipeObjEmit.emit(recipe);
  }
  
}