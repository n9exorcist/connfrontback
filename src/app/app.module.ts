import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RepeatDirective } from './repeat.directive';
import { FilterpipePipe } from './filterpipe.pipe';
import { RidedetailsComponent } from './ridedetails/ridedetails.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RepeatDirective,
    FilterpipePipe,
    RidedetailsComponent,
    LoginComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
