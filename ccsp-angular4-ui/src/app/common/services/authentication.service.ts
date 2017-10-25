import { Injectable,Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Constants } from '../constants';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    private _authToken : string;
    constructor(private httpClient : Http) {

    }
    public get accessToken() : string {
        return localStorage.getItem('token');
    }
    public get isAuthenticated() : boolean {     
        return localStorage.getItem('token') !== null ? true : false;
    }
    public authenticate( username : string, password : string ) {
        this.httpClient
        .post(Constants._authenticationUrl, { username : username, password : password })
        .subscribe(response => this.handleResponse(response))
    }
    public handleResponse(response : Response) {
        localStorage.setItem('token', response.json())
        console.log(localStorage.getItem('token'));
        // Pending -- Save User information as well
    }
    public handleError(error : any) : any {

    }
    public logout() {
        localStorage.removeItem('token');
    }
}