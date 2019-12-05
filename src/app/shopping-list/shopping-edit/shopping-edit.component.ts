import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(name:any,amount:any){
    //alert(name.value+"  "+amount.value)
    const ingredientObj = new Ingredient(name.value,amount.value);
    this.addItem.emit(ingredientObj);
  }
}