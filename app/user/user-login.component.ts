import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserInfo, LoginInfo } from './';
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
    verifiedUser: UserInfo;
    loginInfo: LoginInfo;

    constructor(
      private router: Router,
      private service: UserService
    ) { }

    userInfos: UserInfo[] = [
        { uid: 'sdutta', password: '1234', firstName: 'Somenath', lastName: 'Dutta' },
        { uid: 'modutta', password: '4321',firstName: 'Monalisa', lastName: 'Dutta' }
    ];

    onSubmit(txtUser: string, txtPassword: string): void {
        this.verifiedUser = _.find(this.userInfos, function(txtUid) {
          return txtUid.uid === txtUser && txtUid.password === txtPassword;
        })

        this.service.validateUser(txtUser, txtPassword)
        .subscribe(item => this.loginInfo = item);
    
        this.isSucces = false;
        if(this.verifiedUser) 
        {
          this.isSucces = true;
          this.router.navigate(['/details', this.loginInfo.uid]);
        }
    }
}