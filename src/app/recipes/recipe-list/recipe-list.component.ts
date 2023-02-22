import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test', 'https://cms-cdn.saipos.com/assets/2021/09/03/frango-no-balde-SAIPOS-Sistema-para-Restaurantes-img5_uid_61327a45a0352.png')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
