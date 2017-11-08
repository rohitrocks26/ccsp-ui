import { Injectable,Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Constants } from '../constants';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    private _authToken : string;
    private headers : Headers;
    constructor(private httpClient : Http, private router : Router ) {
        this.headers = this.getHeaders();
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
    public handleResponse(response) {
        //Subject to change depending upon the token response returned
        if(response._body !== undefined) { 
            localStorage.setItem('token', response._body);
            this.router.navigate(['/memberInquiry']);
        }
        localStorage.setItem('token', response._body);
        //console.log(response._body);
        // Pending -- Save User information as well
    }
    
    private getHeaders () : Headers {
        let header = new Headers();
        header.set('Access-Control-Allow-Origin','*');
        header.set('Content-type','application/json');
        return header;
    }

    public handleError(error : any) : any {

    }
    public logout() {
        localStorage.removeItem('token');
    }
}
