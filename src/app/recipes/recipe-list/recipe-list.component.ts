import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  @Output() recipeEmit = new EventEmitter<Recipe>();

  recipes : Recipe [] = [
      new Recipe('recipeName1','recipe description1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtnTazDgpxHQw4NMSJ5hDSLA_cd4Mq1-WG4q28ZRU4giBC-AK&s'),
      new Recipe('recipeName2','recipe description2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bC4K91591vnbGcnHYJ1OiDIALxHOXC7Kvg17ab8ZOcynIV6fMA&s'),
      new Recipe('recipeName3','recipe description3','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtnTazDgpxHQw4NMSJ5hDSLA_cd4Mq1-WG4q28ZRU4giBC-AK&s')
  ]
  ngOnInit() {
  }

  showRecipeInfo(recipe){
    //alert("in list");
    console.log(recipe);
    this.recipeEmit.emit(recipe);
  }

  
}
