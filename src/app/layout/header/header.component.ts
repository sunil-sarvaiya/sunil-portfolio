import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  	responsiveMenuVisible: Boolean = false;
    themeMode:boolean=false;
    currentTheme: string = 'dark';
    isShowThemeModeButton = true;
    
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
    toggleTheme(data:any){
      this.currentTheme = data;
      if (data==='dark'){
        this.commonService.theme.next(true);
        this.isShowThemeModeButton = true;

      }
      else{
        this.isShowThemeModeButton = false;
        this.commonService.theme.next(false)
      }
    }
  scroll(data:any){
  }


}
