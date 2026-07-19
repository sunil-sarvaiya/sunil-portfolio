import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Techtose — Company Website',
      icon: 'fas fa-building',
      description: 'Designed and developed a cross-device compatible company website using Angular and Bootstrap. Integrated Cloudinary for cloud image management and Slick Slider for smooth content transitions.'
    },
    {
      title: 'Carbon Block — SaaS Web App',
      icon: 'fas fa-cloud',
      description: 'Contributed to the Carbon Block SaaS platform by implementing new features using Angular, PrimeNG, and PrimeFlex. Built reusable UI components to maintain consistency across the platform.'
    },
    {
      title: 'ACA Compliance Alpha',
      icon: 'fas fa-shield-alt',
      description: 'Developed grid filtering and server-side export features using Angular and DevExtreme. Wrote comprehensive Playwright E2E tests and Jest unit tests to ensure feature reliability.'
    },
    {
      title: 'SafetyCube — Aviation Safety Platform',
      icon: 'fas fa-plane',
      description: 'Developed features across Cube, Portal, and Admin modules for an airline/airport safety management platform. Implemented table sorting, filtering, and export functionality.'
    },
    {
      title: 'Easy Compliance — Compliance Platform',
      icon: 'fas fa-check-double',
      description: 'Implemented new UI features and improved existing functionalities using Angular and the Solidrange shared library. Ensured consistent UI/UX across all modules.'
    },
    {
      title: 'Vapi Call Assistant — AI Interview Scheduler',
      icon: 'fas fa-robot',
      description: 'Built an AI call assistant using Vapi that automatically contacts candidates and conducts screening. Designed an n8n workflow to process responses and schedule interviews.'
    }
  ];

  constructor() { }
}
