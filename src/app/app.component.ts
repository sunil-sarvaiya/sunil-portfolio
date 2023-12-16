import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
   showScrollButton = false;
   scrollThreshold = 100; 
 
   scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   }
 
   @HostListener('window:scroll', [])
   onWindowScroll() {
     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
     this.showScrollButton = scrollPosition > this.scrollThreshold;
   }
}
