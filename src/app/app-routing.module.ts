import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglepageComponent } from './layout/singlepage/singlepage.component';

const routes: Routes = [
  { path: '', component: SinglepageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
