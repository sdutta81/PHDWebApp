import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { LoginInfo, LoginCredentials, UserInfo } from '../user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    requestOptions: RequestOptions;
    private baseUrl = 'http://localhost:49765/api/v1/users/';

    constructor(private http : Http) { 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.requestOptions = new RequestOptions();
        this.requestOptions.headers = headers;
    }

    validateUser(loginCred : LoginCredentials) : Observable<LoginInfo> {
        let reqUrl = this.baseUrl;

        return this.http.post(reqUrl, JSON.stringify(loginCred), this.requestOptions)
                    .map(this.verifyLogin)
                    .catch(this.handleHTTPError);
    }

    getUserDetails(uid: string, guid: string) : Observable<UserInfo> {
        let reqUrl = this.baseUrl + uid + '/' + guid;

        return this.http.get(reqUrl)
                    .map(this.userDetails)
                    .catch(this.handleHTTPError);
    }

    private verifyLogin(res: Response) : LoginInfo {
        let body = res.json();
        return body || {};
    }

    private userDetails(res: Response) : UserInfo {
        let body = res.json();
        return body || {};
    }

    private handleHTTPError(res : Response | any) {
        return Observable.throw('HTTP error: ' + res.statusText + ' (' + res.status + ')');
    }
}