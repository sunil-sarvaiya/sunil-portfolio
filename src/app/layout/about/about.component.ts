import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
  toggleTheme(data:any){
    if (data==='dark'){
      this.commonService.theme.next(true)
    }
    else{
      this.commonService.theme.next(false)
    }
  }
}
