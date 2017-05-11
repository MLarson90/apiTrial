import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { weatherApi } from 'app/weatherApiKey';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  constructor( private http:Http, private ApiKey: weatherApi) { }
  cheese: string = this.ApiKey.weatherapi;

  getWeather(input){
    console.log(this.cheese);
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&APPID=" + this.cheese).map(
      (res) => res.json()
    );

  }

}
