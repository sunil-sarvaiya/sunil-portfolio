import { Component, HostListener } from '@angular/core';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
   showScrollButton = false;
   scrollThreshold = 100; 
   themeMode:boolean=false;
    
    constructor(private commonService:CommonService){

    }

   ngOnInit(){
    this.commonService.theme.subscribe((res)=>{
      if(res === true){
        this.themeMode = false;
      }
      else{
        this.themeMode = true;
      }
    })
  }

   scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   }
 
   @HostListener('window:scroll', [])
   onWindowScroll() {
     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
     this.showScrollButton = scrollPosition > this.scrollThreshold;
   }
}
