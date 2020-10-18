import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Result } from '../components/WeatherDetails/Models/result.model';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  

  constructor(private http: HttpClient) { }

  public getTreeData():Observable<any>{
    //let headers = new HttpHeaders({
    //    'Access-Control-Allow-Origin': '*' 
    //     });
    //let options = { headers: headers };
   
    const url = 'http://5.100.252.202/EZCloudWebService.EZCloudWebService.svc/Hiererchy/V1/35?tokenId=test&spliterMode=true';

    return this.http.get(url)
    .pipe(
          map((results: Result[]) => results["results"])  //?

         )
  }
}



