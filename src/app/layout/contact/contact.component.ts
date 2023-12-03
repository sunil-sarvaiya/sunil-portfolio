import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    

 

  preset: any = "uploadPreset";
  themeMode:boolean=false;
  cloudName: any = "dj7m5tuv9"
  contactForm!:FormGroup;
  successMessage:boolean=false;
  errorMessage:boolean=false;
  constructor(private http: HttpClient, private commonService:CommonService) {
  }
  ngOnInit(){
    this.initForm();
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
  initForm(){
    this.contactForm = new FormGroup ({
       name :new  FormControl('',Validators.required),
       email: new FormControl( '', [Validators.required,Validators.email]),
       subject: new FormControl( '', Validators.required),
       message:new FormControl ('',)
       });
     }
  onSubmit(data: any) {
    const beforeFolderName = `${data.email}_${this.getFormattedDate()}`;
    const folderPath = `portfolio data/contactUsData/${beforeFolderName}/`; 
    const file = data;
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const publicId = folderPath + file.name;
    const formDataForUpload = new FormData();
    formDataForUpload.append('file', blob, 'data.json');
    formDataForUpload.append('upload_preset', this.preset);
    formDataForUpload.append('cloud_name', this.cloudName);
    formDataForUpload.append("public_id", publicId)
    this.uploadTocloudinary(formDataForUpload)
  }
  uploadTocloudinary(formData: any) {
    this.http.post(`https://api.cloudinary.com/v1_1/${this.cloudName}/raw/upload/`, formData).subscribe((res) => {
      console.log(res, 'res');
      if(res){
        this.successMessage=true;
       this.contactForm.reset();
        setTimeout(()=>{
          this.successMessage=false;
        },3000)
      }
    },
      (err) => {
        this.errorMessage=true;
        setTimeout(()=>{
          this.errorMessage=false;
        },3000)
      })
  }
  getFormattedDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
}