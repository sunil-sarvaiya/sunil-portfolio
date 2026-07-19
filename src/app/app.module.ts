import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './layout/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { SinglepageComponent } from './layout/singlepage/singlepage.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ExperienceComponent,
    HeaderComponent,
    ScrollRevealDirective,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
