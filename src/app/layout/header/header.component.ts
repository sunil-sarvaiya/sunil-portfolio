import { Component, HostListener } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themeMode: boolean = false;
  menuOpen: boolean = false;
  isScrolled: boolean = false;
  activeSection: string = 'home';

  private sections = ['home', 'about', 'experience', 'projects', 'contact'];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });
  }

  scrollTo(sectionId: string) {
    this.restoreBody();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  }

  restoreBody() {
    const scrollY = document.body.style.top;
    this.menuOpen = false;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      this.restoreBody();
    }
  }

  closeMenu() {
    this.restoreBody();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;

    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 50);

    if (isAtBottom) {
      this.activeSection = 'contact';
      return;
    }

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          this.activeSection = this.sections[i];
          break;
        }
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }
}
