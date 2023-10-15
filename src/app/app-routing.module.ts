import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { ExperienceComponent } from './layout/experience/experience.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,

  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'experience',
    component:ExperienceComponent
  },
  {
    path:'**',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
