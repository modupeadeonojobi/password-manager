import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { ViewPasswordComponent } from './view-password/view-password.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneratePasswordComponent,
    ViewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxPaginationModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }], bootstrap: [AppComponent]
})
export class AppModule { }
