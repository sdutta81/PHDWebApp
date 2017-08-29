import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserInfo } from './';

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

    constructor(private router: Router) { }

    userInfos: UserInfo[] = [
        { uid: 'sdutta', password: '1234', firstName: 'Somenath', lastName: 'Dutta' },
        { uid: 'modutta', password: '4321',firstName: 'Monalisa', lastName: 'Dutta' }
    ];

    onSubmit(txtUser: string, txtPassword: string): void {
        this.verifiedUser = _.find(this.userInfos, function(txtUid) {
          return txtUid.uid === txtUser && txtUid.password === txtPassword;
        })
    
        this.isSucces = false;
        if(this.verifiedUser) 
        {
          this.isSucces = true;
          this.router.navigate(['/details', this.verifiedUser.uid]);
        }
    }
}