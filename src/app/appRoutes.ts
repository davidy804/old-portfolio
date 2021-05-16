import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
