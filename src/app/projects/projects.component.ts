import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../shared/project-model';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectItems } from '../shared/projectitems';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectModel[];
  selectedProject: ProjectModel;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getProjects();
    this.projects = ProjectItems;
    this.selectedProject = this.projects[0];
  }

  onclick(inputProject: ProjectModel){
    this.selectedProject = inputProject;
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(data=>this.projects=data);
  }

}
