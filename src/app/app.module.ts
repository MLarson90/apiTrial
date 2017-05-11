import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { masterFirebaseConfig } from 'app/api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { weatherApi } from 'app/weatherApiKey';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routes';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewProjectComponent } from './new-project/new-project.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomePageComponent,
    ProjectDetailComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [weatherApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
