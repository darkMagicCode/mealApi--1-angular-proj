import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {


  constructor(private _HttpClient:HttpClient) { }


  grtAllData():Observable<any> {
 return  this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
}

}


