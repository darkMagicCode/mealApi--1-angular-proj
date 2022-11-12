import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {


  constructor(private _HttpClient:HttpClient) { }


  grtAllData():Observable<any> {
 return  this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
}

  getarea(): Observable<any>{
    return  this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)

}

}
