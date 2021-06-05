import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import { Autocomplete } from './Models/autocomplete.model';
//import { CurrentConditions } from './Models/currentConditions.model';
//import { Forecast } from './Models/forecast.model';
//import { GeoPosition } from './Models/geoPosition.model';
import { map } from 'rxjs/internal/operators/map';
import { Deposit } from '../models/deposit.model';
import { Euro } from '../models/euro.model';
import { Balance } from '../models/balance.model';


@Injectable({
  providedIn: 'root'
})

export class GeneralService {
 
  //private CurrentConditions$ = new Subject<CurrentConditions[]>();
  private deposits$ = new Subject<Deposit[]>();
  
  constructor(private http: HttpClient) { }

//   public currentconditions(q: string): any {
//     var response = new Array<CurrentConditions>();
//     const params = new HttpParams({fromObject: {apikey: this.ApiKey}}); 
    
//     var locationKey = q;
//     const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
  
//      this.http.get<CurrentConditions[]>(url,{params})
//      .subscribe(data => {
//        response = data; 
//       });      
//       return response;
//    }

//    public currentconditionsObs(q: string): Observable<CurrentConditions[]> {
//     const params = new HttpParams({fromObject: {apikey: this.ApiKey}}); 
     
//     var locationKey = q;

//     const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
  
//     this.http.get<CurrentConditions[]>(url,{params})
//     .subscribe(data => this.CurrentConditions$.next(data));
//      return this.CurrentConditions$;
//   }
  
//    public locationAutocomplete(q:string): any {
//     var response = new Array<Autocomplete>(); 
//     const params = new HttpParams({fromObject: {apikey: this.ApiKey,q}}); 
   
//      const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete`;
 
//      this.http.get<Autocomplete[]>(url,{params})
//      .subscribe(data => {
//       response = data; 
//      }); 
//      return response ;

//    }

//    public fiveDaysForecasts(locationKey:string): any {
//     var response = Array<Forecast>();
//     const params = new HttpParams({fromObject: {apikey: this.ApiKey}}); 
    
//      const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`;     

//      this.http.get<any>(url,{params})
//      .subscribe(data => {
//        response = data["DailyForecasts"]; 
//       }); 
//       return response;
//    }

//    public fiveDaysForecastsObs(locationKey:string): Observable<Forecast[]> {    
//      const params = new HttpParams({fromObject: {apikey: this.ApiKey}}); 
//      const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`;

//      return this.http.get<Forecast[]>(url,{params})
//      .pipe(
//            map((forcasts: Forecast[]) => forcasts["DailyForecasts"])
//           )
//    }

//   public geoPosition(q?): Observable<any>{
//     const params = new HttpParams({fromObject: {apikey: this.ApiKey,q}});
//     return this.http.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search`,{params})
//     .pipe(
//         map((geopos: GeoPosition) => geopos.Key)
//     )
//   }
  


public GetBalances(): Observable<Balance[]> {    
    const url = `http://localhost:3000/general/balances/`;

    return this.http.get<Balance[]>(url)
    .pipe(
          map((balances: Balance[]) =>  balances )// forcasts["DailyForecasts"])
         )
  }


  public GetEuros(): Observable<Euro[]> {    
    const url = `http://localhost:3000/general/euro/`;

    return this.http.get<Euro[]>(url)
    .pipe(
          map((euro: Euro[]) =>  euro )
         )
  }



  public GetDeposits(): Observable<Deposit[]> {    
    //const params = new HttpParams({fromObject: {apikey: this.ApiKey}}); 
    const url = `http://localhost:3000/general/deposits/`;

    return this.http.get<Deposit[]>(url)
    .pipe(
          map((deposits: Deposit[]) =>  deposits )// forcasts["DailyForecasts"])
         )
  }

  public GetWithdrawls(): Observable<Deposit[]> {    
    //const params = new HttpParams({fromObject: {apikey: this.ApiKey}}); 
    const url = `http://localhost:3000/general/withdrawls/`;

    return this.http.get<Deposit[]>(url)
    .pipe(
          map((withdrawls: Deposit[]) =>  withdrawls )// forcasts["DailyForecasts"])
         )
  }



}
