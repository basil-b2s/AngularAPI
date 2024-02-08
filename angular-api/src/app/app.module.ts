import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiCallService } from './api-call.service';
import { apicallingInterceptor } from './apicalling.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiCallService,
    { provide: HTTP_INTERCEPTORS, useClass: apicallingInterceptor, multi: true }
  ],
  bootstrap : [
    AppComponent
  ]
})
export class AppModule { }
