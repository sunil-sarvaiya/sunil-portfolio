import { Component, HostListener } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.scss']
})
export class HeaderrComponent {
  themeMode: boolean = false;
  menuOpen: boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.menuOpen = false;
    }
  }
}
