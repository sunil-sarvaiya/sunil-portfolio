import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences: any[] = [
    {
      company: 'Envisage Infotech, Ahmedabad',
      date: 'May 2023 - Present',
      role: 'Full Stack Developer',
      icon: 'fas fa-code',
      points: [
        'Built and maintained multiple Angular-based SaaS and compliance platforms with responsive, cross-browser compatible UI.',
        'Developed reusable UI component libraries using PrimeNG, DevExtreme, Bootstrap, and PrimeFlex — reducing development time across projects.',
        'Integrated REST APIs for data grids, filters, and server-side export features across multiple modules.',
        'Improved application performance using Angular best practices: trackBy, dynamic dialog imports, and component-level caching.',
        'Resolved memory leaks, SonarQube code quality issues, and critical bugs to enhance application stability.',
        'Wrote Playwright end-to-end tests and Jest unit tests to maintain code quality and prevent regressions.'
      ],
      tags: ['Angular', 'TypeScript', 'Node.js', 'PrimeNG', 'DevExtreme', 'Bootstrap', 'PrimeFlex', 'RxJS', 'Playwright', 'Jest', 'SonarQube']
    },
    {
      company: 'Cybercom Creation, Ahmedabad',
      date: 'Feb 2023 - Apr 2023',
      role: 'Front-End Intern',
      icon: 'fas fa-laptop-code',
      points: [
        'Built a fully functional e-commerce website using HTML, CSS, JavaScript, and Angular.',
        'Designed responsive UI layouts and integrated company-provided REST APIs for product listing and cart functionality.',
        'Gained hands-on experience with Angular component architecture and data binding.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular', 'REST APIs']
    }
  ];

  constructor() { }
}
