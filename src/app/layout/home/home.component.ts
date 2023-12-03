import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  themeMode:boolean=false;
    
  constructor(private commonService:CommonService){

  }

  ngOnInit(){
    this.commonService.theme.subscribe((res)=>{
      console.log(res,'home');
      
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
  downloadPdf() {
    const pdfPath = 'assets/sunil_resume.pdf'; 
    window.open(pdfPath, '_blank');
    

  }
}
