import { Component, Input } from '@angular/core';
import { UserInfo } from './';

import 'lodash';
declare var _;

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html'
})

export class UserDetails {
    @Input() message: string;
    @Input() loggedinUser: UserInfo;
}
