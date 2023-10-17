import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { Aviation } from './Aviation';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataserviceService {

  constructor(private http: HttpClient) { }


  _url1 = 'http://api.aviationstack.com/v1/flights?access_key=3b6b60a3c65ddac1c3985b99fb78fb10';
  getDatas(): Observable<any> {
    return this.http.get<any>(this._url1);
  }

  getFlightNumber(flightNumber:any):Observable<any>{
 
    return this.http.get<any>(this._url1+'&flight_number='+flightNumber);
  }
  getAirlineName(airlineName:any):Observable<any>{
    return this.http.get<any>(this._url1+'&airline_name='+airlineName);
  }
  deleteById(id:number){
    return this.http.delete(this._url1+id);
  }

}
