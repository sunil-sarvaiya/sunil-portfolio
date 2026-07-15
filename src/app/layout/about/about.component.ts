import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  themeMode: boolean = false;

  education = [
    {
      degree: 'Bachelor of Engineering (CE)',
      school: 'Government Engineering College - Rajkot',
      board: 'Gujarat Technological University',
      score: '7.28 CGPA',
      duration: '06/2019 - 06/2023'
    },
    {
      degree: '12th (Higher Secondary)',
      school: 'Sarthi Vidhya Sankul - Bhavnagar',
      board: 'Gujarat Secondary & Higher Secondary Education Board',
      score: '68.46%',
      duration: '06/2018 - 04/2019'
    },
    {
      degree: '10th (Secondary)',
      school: 'Shree New Gold School - Jesar',
      board: 'Gujarat Secondary Education Board',
      score: '78.17%',
      duration: '06/2016 - 04/2017'
    }
  ];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });
  }
}
