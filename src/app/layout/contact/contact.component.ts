import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  themeMode: boolean = false;
  contactForm!: FormGroup;
  successMessage: boolean = false;
  errorMessage: boolean = false;
  generalErrorMessage: string | undefined;
  generalErrorMessageShow: any = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.initForm();
    this.commonService.theme.subscribe((res) => {
      this.themeMode = res === true ? false : true;
    });
  }

  toggleTheme(data: any) {
    if (data === 'dark') {
      this.commonService.theme.next(true);
    } else {
      this.commonService.theme.next(false);
    }
  }

  initForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }

  onSubmit(data: any) {
    if (this.contactForm.valid) {
      this.generalErrorMessageShow = false;
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      messages.push({ ...data, date: new Date().toISOString() });
      localStorage.setItem('contactMessages', JSON.stringify(messages));
      this.successMessage = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.successMessage = false;
      }, 3000);
    } else {
      this.generalErrorMessage = 'Please Enter all fields';
      this.generalErrorMessageShow = true;
    }
  }
}