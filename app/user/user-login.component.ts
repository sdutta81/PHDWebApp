import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { LoginInfo, LoginCredentials } from './';

import { UserService } from '../service/user.service';

import 'lodash';
declare var _;

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLogin {
    isSucces: boolean;
    verifiedUser: LoginInfo;
    loginCredentials: LoginCredentials;

    constructor(
      private router: Router,
      private service: UserService
    ) { }

    onSubmit(txtUser: string, txtPassword: string): void {
      this.loginCredentials = { uid: txtUser, pwd: txtPassword};
      this.isSucces = false;

      this.service.validateUser(this.loginCredentials)
      .subscribe(loginData => {
        this.verifiedUser = loginData;
        this.isSucces = false;
        if(this.verifiedUser) {
          this.gotoDetails();
        }
      });
    }

    gotoDetails() : void {
      this.router.navigate(['/details', this.verifiedUser.Uid, this.verifiedUser.Guid]);
    }
}