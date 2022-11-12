import { ApiInterF } from './../api-inter-f';
import { Component, OnInit } from '@angular/core';
import { ApiMealService } from '../api-meal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ApiMealService: ApiMealService) { }

  mealArray: ApiInterF[] = [];

  ngOnInit(): void {

    this._ApiMealService.grtAllData().subscribe((data) => {
      this.mealArray = data.meals;
      console.log(data.meals);
    })
  }

  mealIdClick: number = 0;

  test(mealId:any) {
    this.mealIdClick = mealId;
    console.log(mealId);


}







}
