import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetails, UserLogin } from './user';
import { APP_ROUTING } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  declarations: [
    AppComponent,
    UserDetails,
    UserLogin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
