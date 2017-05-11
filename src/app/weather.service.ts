import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { weatherApi } from 'app/weatherApiKey';
import { Project } from 'app/project.model';
import 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WeatherService {
  projects: FirebaseListObservable<any[]>;


  constructor(private database:AngularFireDatabase, private http:Http, private ApiKey: weatherApi) {
    this.projects = database.list('projects');
}
    cheese: string = this.ApiKey.weatherapi;

    addProject(newProject: Project){
      this.projects.push(newProject);
    }
  getProjects(){
    return this.projects;
  }

  getProjectById(productId: string){
    return this.database.object('projects/' + productId);
  }
  donate(addToProduct ,value){
    var projectEntry = this.getProjectById(addToProduct);
    projectEntry.update({raised:value });
  }

  getWeather(input){
    console.log(this.cheese);
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&APPID=" + this.cheese).map(
      (res) => res.json()
    );

  }

}
