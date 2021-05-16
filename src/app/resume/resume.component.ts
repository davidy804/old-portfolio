import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  doc = "../assets/pdfs/resume.pdf";
  
  constructor() { }

  ngOnInit() {
  }

}
