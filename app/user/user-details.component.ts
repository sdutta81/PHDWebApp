import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { UserInfo } from './';
import { UserService } from '../service/user.service';

import 'lodash';
declare var _;

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html'
})

export class UserDetails implements OnInit {
    loggedinUser: UserInfo;

    constructor(
        private route: ActivatedRoute,
        private service: UserService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.getUserDetails(params['uid'], params['guid'])
            .subscribe(userDetails => {
                this.loggedinUser = userDetails;
            });
        });
    }
}
