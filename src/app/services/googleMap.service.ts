

//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
//+Mountain+View,+CA&key=YOUR_API_KEY


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Result } from '../components/WeatherDetails/Models/location.model';
import { map } from 'rxjs/internal/operators/map';
import { Result } from '../components/WeatherDetails/Models/location.model';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapService {

  key = 'AIzaSyAdnouwwu_BoGw7OD5zyvll1NKF5SOaS4Q';
     
  constructor(private http: HttpClient) { }

  
  findLocation(address:string):any {
       let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*' 
             });
        let options = { headers: headers };

        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.key,options);
    }


public findLocationObs(address:string):Observable<any>{
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*' 
             });
        let options = { headers: headers };
       
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.key;
   
        return this.http.get(url)
        .pipe(
              map((results: Result[]) => results["results"])

             )
      }
  }

