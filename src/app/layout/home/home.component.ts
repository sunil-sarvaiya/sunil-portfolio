import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { homedata } from 'src/assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  themeMode:boolean=false;
  homeData:any;
    
  constructor(private commonService:CommonService){

  }

  ngOnInit(){
    this.commonService.getAllData().subscribe(
      (res: any) => {
        this.homeData = res['homedata'];
        console.log(homedata);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
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
  downloadPdf() {
    const pdfPath = 'assets/sunil_resume.pdf'; 
    window.open(pdfPath, '_blank');
    

  }
}
