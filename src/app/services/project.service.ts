import { Injectable } from '@angular/core';
import { ProjectModel } from '../shared/project-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectItems } from '../shared/projectitems';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectUrl = 'api/ProjectItems';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectModel[]>{
    return this.http.get<ProjectModel[]>(this.projectUrl);
  }

  getProject(id: any): Observable<ProjectModel>{
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<ProjectModel>(url);
  }

  returnProjects(): ProjectModel[] {
    return ProjectItems;
  }

  returnProject(id: any): ProjectModel {
    return ProjectItems.filter(project => project.id === id)[0];
  }

}
