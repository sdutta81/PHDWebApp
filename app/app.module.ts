import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { UserDetails, UserLogin } from './user';
import { APP_ROUTING } from "./app.routes";
import { UserService } from "./service/user.service";

@NgModule({
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UserDetails,
    UserLogin
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
