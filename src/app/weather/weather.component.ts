import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    weathers = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(
      (data) => this.weathers.push(data)
    );
    console.log(this.weathers);
  }

}
