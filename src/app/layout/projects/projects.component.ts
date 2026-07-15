import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  themeMode: boolean = false;

  projects = [
    {
      title: 'Techtose Company Website',
      icon: 'fas fa-building',
      description: 'Developed the official site using Bootstrap, Cloudinary for storage, and integrated Slick Slider for enhanced UX.',
      tech: ['Responsive design using Bootstrap', 'Cloudinary used for media storage', 'Integrated Slick Slider', 'Interactive case study section']
    },
    {
      title: 'Carbon Block (SaaS Platform)',
      icon: 'fas fa-cloud',
      description: 'Contributed to development of Carbon Block using Angular and NGRX for scalable architecture.',
      tech: ['Implemented key UI features using PrimeNG', 'Used NGRX for state management', 'Enhanced performance and UX']
    },
    {
      title: 'ACA Compliance Alpha',
      icon: 'fas fa-shield-alt',
      description: 'RegTech platform for compliance solutions; worked on Angular front-end and automated testing.',
      tech: ['End-to-end tests using Playwright', 'Unit tests using Jest', 'Implemented grid filters, server-side export']
    },
    {
      title: 'SafetyCube Platform',
      icon: 'fas fa-plane',
      description: 'Aviation safety and risk management tool with three functional interfaces.',
      tech: ['Cube: Safety reports, audits, risks', 'Portal: User reporting and collaboration', 'Admin: Configuration and access control', 'Enhanced table features, optimized performance']
    }
  ];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });
  }
}
