import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  downloadPdf() {
    const pdfPath = 'assets/sunil_resume.pdf'; 
    window.open(pdfPath, '_blank');

  }
}
