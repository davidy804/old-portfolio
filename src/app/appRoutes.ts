import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { ProjectsComponent } from './projects/projects.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
