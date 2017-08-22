import { Component, Input } from '@angular/core';
import { UserInfo } from './user';

import 'lodash';
declare var _;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  result: string;
  isSucces: boolean;
  verifiedUser: UserInfo;
  title = 'Health Data App';

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
      this.result = "success!";
      this.isSucces = true;
    }
  }
}
