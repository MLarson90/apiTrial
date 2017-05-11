import { Component, OnInit } from '@angular/core';
import { Project } from 'app/project.model';
import { Comment } from 'app/comment.model';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers:[WeatherService]
})
export class NewProjectComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}
  submitForm(amount: number, author: string, description:string, title:string){
    var newProject: Project = new Project(amount,author,description, 0, title);
    this.weatherService.addProject(newProject);
  }
  ngOnInit() {
  }

}
