import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherComponent } from './weather/weather.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const appRoutes: Routes = [

  {
    path: '',
    component:HomePageComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
