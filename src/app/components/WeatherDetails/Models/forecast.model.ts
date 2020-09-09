export class Forecast {        
    Date:string;
    EpocDate:string;
    Temperature: { Minimum: {Value:number,Unit:string,UnitType:number},Maximum: {Value:number,Unit:string,UnitType:number}};
    Day: {Icon:number,IconPhrase:string,HasPrecipitation:boolean};
    Night: {Icon:number,IconPhrase:string,HasPrecipitation:boolean};
    Sources:['AccuWeather'];
    MobileLink:string;
    Link:string;

  }


    //   "DailyForecasts": [
  //     {
  //       "Date": "2020-08-05T07:00:00+03:00",
  //       "EpochDate": 1596600000,
  //       "Temperature": {
  //         "Minimum": {
  //           "Value": 77,
  //           "Unit": "F",
  //           "UnitType": 18
  //         },
  //         "Maximum": {
  //           "Value": 88,
  //           "Unit": "F",
  //           "UnitType": 18
  //         }
  //       },
  //       "Day": {
  //         "Icon": 2,
  //         "IconPhrase": "Mostly sunny",
  //         "HasPrecipitation": false
  //       },
  //       "Night": {
  //         "Icon": 34,
  //         "IconPhrase": "Mostly clear",
  //         "HasPrecipitation": false
  //       },
  //       "Sources": [
  //         "AccuWeather"
  //       ],
  //       "MobileLink": "http://m.accuweather.com/en/il/kiryat-atidim/215805/daily-weather-forecast/215805?day=1&lang=en-us",
  //       "Link": "http://www.accuweather.com/en/il/kiryat-atidim/215805/daily-weather-forecast/215805?day=1&lang=en-us"
  //     },




  //response data - all data
  //{"Headline":
  //{"EffectiveDate":"2020-08-07T19:00:00+09:00","EffectiveEpochDate":1596794400,"Severity":5,"Text":"Expect showery weather Friday evening through Saturday morning","Category":"rain","EndDate":"2020-08-08T13:00:00+09:00","EndEpochDate":1596859200,"MobileLink":"http://m.accuweather.com/en/jp/osaka/2402872/extended-weather-forecast/2402872?lang=en-us","Link":"http://www.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?lang=en-us"},
  //"DailyForecasts":[
  //  {"Date":"2020-08-07T07:00:00+09:00","EpochDate":1596751200,"Temperature":{"Minimum":{"Value":72.0,"Unit":"F","UnitType":18},"Maximum":{"Value":83.0,"Unit":"F","UnitType":18}},"Day":{"Icon":16,"IconPhrase":"Mostly cloudy w/ t-storms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Night":{"Icon":12,"IconPhrase":"Showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=1&lang=en-us","Link":"http://www.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=1&lang=en-us"},{"Date":"2020-08-08T07:00:00+09:00","EpochDate":1596837600,"Temperature":{"Minimum":{"Value":71.0,"Unit":"F","UnitType":18},"Maximum":{"Value":76.0,"Unit":"F","UnitType":18}},"Day":{"Icon":12,"IconPhrase":"Showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Night":{"Icon":12,"IconPhrase":"Showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=2&lang=en-us","Link":"http://www.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=2&lang=en-us"},{"Date":"2020-08-09T07:00:00+09:00","EpochDate":1596924000,"Temperature":{"Minimum":{"Value":74.0,"Unit":"F","UnitType":18},"Maximum":{"Value":83.0,"Unit":"F","UnitType":18}},"Day":{"Icon":15,"IconPhrase":"Thunderstorms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":35,"IconPhrase":"Partly cloudy","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=3&lang=en-us","Link":"http://www.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=3&lang=en-us"},{"Date":"2020-08-10T07:00:00+09:00","EpochDate":1597010400,"Temperature":{"Minimum":{"Value":76.0,"Unit":"F","UnitType":18},"Maximum":{"Value":87.0,"Unit":"F","UnitType":18}},"Day":{"Icon":3,"IconPhrase":"Partly sunny","HasPrecipitation":false},"Night":{"Icon":8,"IconPhrase":"Dreary","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=4&lang=en-us","Link":"http://www.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=4&lang=en-us"},{"Date":"2020-08-11T07:00:00+09:00","EpochDate":1597096800,"Temperature":{"Minimum":{"Value":77.0,"Unit":"F","UnitType":18},"Maximum":{"Value":91.0,"Unit":"F","UnitType":18}},"Day":{"Icon":7,"IconPhrase":"Cloudy","HasPrecipitation":false},"Night":{"Icon":36,"IconPhrase":"Intermittent clouds","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=5&lang=en-us","Link":"http://www.accuweather.com/en/jp/osaka/2402872/daily-weather-forecast/2402872?day=5&lang=en-us"}]}