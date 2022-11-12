import { ApiCategoryService } from './../api-category.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-api-category',
  templateUrl: './api-category.component.html',
  styleUrls: ['./api-category.component.css']
})
export class ApiCategoryComponent implements OnInit {

  constructor(private _ApiCategoryService:ApiCategoryService) { }
  cateArray: any[] = [];
  ngOnInit(): void {
    this._ApiCategoryService.grtAllData().subscribe((data) => {
      this.cateArray = data.categories;
      console.log(data.categories);
    })
  }

}
