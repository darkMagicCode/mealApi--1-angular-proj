import { IntgertionService } from './../intgertion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intgreation',
  templateUrl: './intgreation.component.html',
  styleUrls: ['./intgreation.component.css']
})
export class IntgreationComponent implements OnInit {

  constructor(private IntgertionService:IntgertionService) { }
  cateArray: any[] = [];
  ngOnInit(): void {
    this.IntgertionService.grtAllData().subscribe((data) => {
      this.cateArray = data.meals;
    })
  }
}
