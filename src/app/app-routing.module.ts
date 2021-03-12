import { ViewPasswordComponent } from './view-password/view-password.component';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      },
      {
        path: 'home', component: HomeComponent
      },
    ]
  },
  {
    path: 'generate-password',
    component: GeneratePasswordComponent
  },
  {
    path: 'view-password',
    component: ViewPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
