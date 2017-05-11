import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Project } from 'app/project.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [WeatherService]
})
export class HomePageComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private weatherService: WeatherService, private router:Router) {
  this.projects = weatherService.projects}

  ngOnInit() {
    this.projects = this.weatherService.getProjects();
  }

  goToDetailPage(clickedProject){
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
