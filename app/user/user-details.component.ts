import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { UserInfo } from './';

import 'lodash';
declare var _;

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html'
})

export class UserDetails implements OnInit {
    loggedinUser: UserInfo;

    userInfos: UserInfo[] = [
        { uid: 'sdutta', password: '1234', firstName: 'Somenath', lastName: 'Dutta' },
        { uid: 'modutta', password: '4321',firstName: 'Monalisa', lastName: 'Dutta' }
    ];

    constructor(private route: ActivatedRoute) { 
        this.loggedinUser = null;
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.loggedinUser = _.find(this.userInfos, function(infos) {
                return infos.uid === params['uid'];
            });
        });
    }
}
