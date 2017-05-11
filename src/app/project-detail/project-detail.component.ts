import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from 'app/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [WeatherService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  constructor(private route: ActivatedRoute, private location:Location, private weatherService: WeatherService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.weatherService.getProjectById(this.projectId);
  }

}
