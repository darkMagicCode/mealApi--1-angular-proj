import { ApiInterF } from './api-inter-f';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMealService {

  constructor(private _HttpClient:HttpClient) { }


  grtAllData():Observable<any> {
 return  this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
}

}
