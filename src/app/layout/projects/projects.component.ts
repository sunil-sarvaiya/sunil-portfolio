import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: any[] = [
    {
      title: 'Techtose — Company Website',
      icon: 'fas fa-building',
      techStack: ['Angular', 'Bootstrap', 'Cloudinary'],
      points: [
        'Built a fully responsive company website using Angular and Bootstrap with multi-device layout support.',
        'Integrated Cloudinary for cloud image management and Slick Slider for smooth content transitions.',
        'Developed a dynamic case study showcase to highlight company services and achievements.'
      ]
    },
    {
      title: 'Carbon Block — SaaS Web App',
      icon: 'fas fa-cloud',
      techStack: ['Angular', 'PrimeNG', 'PrimeFlex'],
      points: [
        'Contributed to the Carbon Block SaaS platform by implementing new features using Angular, PrimeNG, and PrimeFlex.',
        'Built reusable UI components to maintain consistency across the platform and speed up future development.'
      ]
    },
    {
      title: 'ACA Compliance Alpha',
      icon: 'fas fa-shield-alt',
      techStack: ['Angular', 'Angular Material', 'DevExtreme', 'Playwright'],
      points: [
        'Developed grid filtering and server-side export features using Angular and DevExtreme.',
        'Wrote comprehensive Playwright E2E tests and Jest unit tests to ensure feature reliability.',
        'Fixed multiple bugs that improved overall application stability and user experience.'
      ]
    },
    {
      title: 'SafetyCube — Aviation Safety & Compliance Platform',
      icon: 'fas fa-plane',
      techStack: ['Angular', 'PrimeNG'],
      points: [
        'Developed features across Cube, Portal, and Admin modules for an airline/airport safety management platform.',
        'Implemented table sorting, filtering, and export functionality used by operational teams.',
        'Optimized performance via caching, trackBy directives, and dynamic dialog imports — reducing unnecessary re-renders.',
        'Resolved memory leaks and SonarQube issues, improving long-term code maintainability.'
      ]
    },
    {
      title: 'Easy Compliance — Compliance Management Platform',
      icon: 'fas fa-check-double',
      techStack: ['Angular', 'Solidrange UI Library (private)', 'Angular Material', 'PrimeNG'],
      points: [
        'Implemented new UI features and improved existing functionalities using Angular and the Solidrange shared library.',
        'Ensured consistent UI/UX across all modules and resolved bugs to improve performance and stability.'
      ]
    },
    {
      title: 'HRMS — Human Resource Management System',
      icon: 'fas fa-users-cog',
      techStack: ['React.js', 'Node.js'],
      points: [
        'Developed an internal HRMS application using React.js and Node.js for managing employee HR processes.',
        'Implemented modules for leave requests, holiday calendar, timesheets, and salary slips.',
        'Built employee and manager workflows for submitting, reviewing, approving, and rejecting leave requests and timesheets.'
      ]
    },
    {
      title: 'HRMS Automation — AI-Powered Recruitment Automation',
      icon: 'fas fa-robot',
      techStack: ['Angular', 'Python FastAPI', 'n8n'],
      points: [
        'Developed a recruitment automation platform using Angular, Python FastAPI, and n8n.',
        'Automated the hiring workflow from job opening and candidate email processing to resume screening, candidate communication, and interview scheduling.',
        'Implemented AI-based resume screening by matching candidate resumes with job descriptions and generating configurable scores.',
        'Developed a Python-based AI Interview Agent to conduct interviews, evaluate candidate responses against the JD and Q&A, and store interview feedback and scores.',
        'Automated candidate communication using email templates and interview links, reducing manual recruitment effort.'
      ]
    }
  ];

  constructor() { }
}
