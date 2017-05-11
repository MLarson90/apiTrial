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
  addDonation(value, key, money, amount){
    if(parseInt(amount) > parseInt(money)){
    var total = parseInt(money) + parseInt(value);
    this.weatherService.donate(key, total);
  }else{
    alert("Does not need that much!");
  }
  }
}
