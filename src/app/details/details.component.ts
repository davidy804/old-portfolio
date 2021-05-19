import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { ProjectModel } from '../shared/project-model';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  project: ProjectModel;
  projects: ProjectModel[];

  constructor(private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
    ) { }


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('id-');
    console.log(id);
    this.projectService.getProjects().subscribe(data => this.projects = data);
    this.project = this.projectService.returnProject(id);

    this.route.params.pipe(
      switchMap((params: Params) =>
      this.projectService.getProject(+params['id']))).subscribe(data => {
       this.project = data;
      }
    );
  }

  goBack(): void{
    this.location.back();
  }

}
