import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { LoginInfo } from '../user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    requestOptions: RequestOptions;
    private baseUrl = 'http://phdservice.azurewebsites.net/api/v1/users/';

    constructor(private http : Http) { 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.requestOptions = new RequestOptions();
        this.requestOptions.headers = headers;
    }

    validateUser(uid, pass) : Observable<LoginInfo> {
        let reqUrl = this.baseUrl + '/' + uid + '/' + pass;

        return this.http.post(reqUrl, null)
                    .map(this.verifyLogin)
                    .catch(this.handleHTTPError);
    }

    private verifyLogin(res: Response) : LoginInfo {
        let body = res.json();
        return body || {};
    }

    private handleHTTPError(res : Response | any) {
        return Observable.throw('HTTP error: ' + res.statusText + ' (' + res.status + ')');
    }
}