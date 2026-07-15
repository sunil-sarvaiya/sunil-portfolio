import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { homedata } from 'src/assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  themeMode: boolean = false;
  homeData: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.homeData = homedata;

    this.commonService.theme.subscribe((res) => {
      if (res === true) {
        this.themeMode = false;
      }
      else {
        this.themeMode = true;
      }
    })
  }
  toggleTheme(data: any) {
    if (data === 'dark') {
      this.commonService.theme.next(true)
    }
    else {
      this.commonService.theme.next(false)
    }
  }
  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/Sarvaiya Sunil\'s Resume.pdf';
    link.download = 'Sarvaiya Sunil\'s Resume.pdf';
    link.click();
  }
}
