import { Injectable } from '@angular/core';
import { weatherConfig } from 'app/app.module';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor( private http:Http) { }
  getWeather(){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + "omaha" + "&APPID=" + "1842132c0047166785455f8bb4055761").map(
      (res) => res.json()
    );
  }
}
