import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  skillCategories = [
    {
      category: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Angular']
    },
    {
      category: 'UI Libraries',
      icon: 'fas fa-palette',
      skills: ['PrimeNG', 'DevExtreme', 'Bootstrap', 'PrimeFlex', 'TailwindCSS']
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      skills: ['Node.js']
    },
    {
      category: 'Testing',
      icon: 'fas fa-vial',
      skills: ['Playwright (E2E)', 'Jest (Unit Tests)']
    },
    {
      category: 'Tools',
      icon: 'fas fa-tools',
      skills: ['GitHub', 'Bitbucket', 'VS Code', 'SonarQube', 'n8n']
    }
  ];

  education = [
    {
      degree: 'Bachelor of Engineering (Computer Engineering)',
      school: 'Gujarat Technological University',
      board: '2019 - 2023',
      score: 'CPI: 7.48 / 10',
      duration: '2019 - 2023'
    },
    {
      degree: 'Higher Secondary (12th), Science',
      school: 'GSHSEB',
      board: '2018 - 2019',
      score: '68.46%',
      duration: '2018 - 2019'
    },
    {
      degree: 'Secondary School (10th)',
      school: 'Shree New Gold School - Jesar',
      board: 'GSEB',
      score: '78.17%',
      duration: '2016 - 2017'
    }
  ];

  constructor() { }
}
