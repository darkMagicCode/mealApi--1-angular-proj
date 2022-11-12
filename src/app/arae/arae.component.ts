import { AreaService } from './../area.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arae',
  templateUrl: './arae.component.html',
  styleUrls: ['./arae.component.css']
})
export class AraeComponent implements OnInit {

  constructor(private _AreaService:AreaService) { }
  cateArray: any[] = [];
  ngOnInit(): void {
    this._AreaService.grtAllData().subscribe((data) => {
      this.cateArray = data.meals;
    })
  }
}
