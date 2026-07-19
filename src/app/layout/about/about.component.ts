import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

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
