import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.scss']
})
export class HeaderrComponent {
  themeMode: boolean = false;
  menuOpen: boolean = false;
  isScrolled: boolean = false;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.menuOpen = false;
      document.body.style.overflow = '';
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }
}
