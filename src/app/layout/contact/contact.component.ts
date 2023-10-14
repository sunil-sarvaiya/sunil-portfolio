import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!:FormGroup;
  ngOnInit(){
    this.initForm();
  }

  initForm(){
   this.contactForm = new FormGroup ({
      name :new  FormControl('',Validators.required),
      email: new FormControl( '', Validators.required),
      subject: new FormControl( '', Validators.required),
      message:new FormControl ('',)
      });
    }
    onSubmit(formData:any){
      console.log('form data ', formData);

    }  

}
