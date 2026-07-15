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
      company: 'Envisage Infotech, Ahmedabad',
      date: 'May 2023 - Present',
      role: 'Angular Developer',
      icon: 'fas fa-code',
      description: 'Built and maintained multiple Angular-based SaaS and compliance platforms with responsive, cross-browser compatible UI. Developed reusable UI component libraries using PrimeNG, DevExtreme, Bootstrap, and PrimeFlex. Integrated REST APIs for data grids, filters, and server-side export features. Improved application performance using Angular best practices: trackBy, dynamic dialog imports, and component-level caching. Resolved memory leaks, SonarQube code quality issues, and critical bugs. Wrote Playwright E2E tests and Jest unit tests.',
      tags: ['Angular', 'TypeScript', 'PrimeNG', 'DevExtreme', 'RxJS', 'Playwright', 'Jest']
    },
    {
      company: 'Cybercom Creation, Ahmedabad',
      date: 'Feb 2023 - Apr 2023',
      role: 'Front-End Intern',
      icon: 'fas fa-laptop-code',
      description: 'Built a fully functional e-commerce website using HTML, CSS, JavaScript, and Angular. Designed responsive UI layouts and integrated company-provided REST APIs for product listing and cart functionality. Gained hands-on experience with Angular component architecture and data binding.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular', 'REST APIs']
    }
  ];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });
  }
}
