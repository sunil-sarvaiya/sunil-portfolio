import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  downloadImage() {
    // Define the path to the image in the assets directory
    const imagePath = 'https://res.cloudinary.com/dj7m5tuv9/image/upload/v1697284591/portfolio%20data/Resume/sunil-resume.jpg';

    // Create a new anchor element
    const anchor = document.createElement('a');

    // Set the href attribute to the image path
    anchor.setAttribute('href', imagePath);

    // Set the download attribute to specify the filename for the download
    anchor.setAttribute('download', 'my-image.jpg');

    // Simulate a click event to trigger the download
    anchor.click();
  }
}
