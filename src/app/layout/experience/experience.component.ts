import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  themeMode: boolean = false;

  experiences = [
    {
      company: 'Cybercom Creation Ahmedabad',
      date: 'Feb 2023 - Apr 2023',
      icon: 'fas fa-laptop-code',
      description: 'During my internship at Cybercom, I strengthened my skills in HTML, CSS, and JavaScript, and learned Angular to build an e-commerce website. I was responsible for designing the UI and integrating company-provided APIs to ensure smooth functionality.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular']
    },
    {
      company: 'Envisage Infotech Ahmedabad',
      date: 'May 2023 - Present',
      icon: 'fas fa-code',
      description: 'I am currently working as an Angular Developer at Envisage Infotech. I initially underwent 6 months of training, where after 2 months I was moved to live project work. Upon completing the training, I was officially designated as an Angular Developer and have been working in that role since.',
      tags: ['Angular', 'TypeScript', 'NGRX', 'PrimeNG', 'Playwright']
    }
  ];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });
  }
}
