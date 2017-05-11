import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    weathers = [];
  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
  }
  addCity(input){
    this.weathers = [];
  this.weatherService.getWeather(input).subscribe(
    (data) => this.weathers.push(data)
  );
  console.log(this.weathers);
}
}
