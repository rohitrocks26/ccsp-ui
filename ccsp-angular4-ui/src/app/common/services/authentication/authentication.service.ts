import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../constants';
import { UtilsService } from '../utils/utils.service';
import { GlobalErrorHandlerService } from '../global/globalerrorhandler.service'
import { Token } from './token';
import { HttpResponseError } from '../global/http-response-error'
import 'rxjs/Rx';


@Injectable()
export class AuthenticationService {
    private _authToken: string;
    private headers: Headers;
    constructor(private router: Router, private httpClient: Http, 
        private globalErrorHandlerService : GlobalErrorHandlerService) {
        this.headers = this.getHeaders();
    }
    public get accessToken(): string {
        return localStorage.getItem('token');
    }
    public get isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null ? true : false;
    }
    public authenticate(username: string, password: string) {
       return this.httpClient.post(Constants.AUTH_URL, {username : username, password : password}, {headers : this.headers })
        .map(response => this.handleResponse(response))
        .timeout(5000)        
        .catch(error => this.handleError(error))
    }
    private handleResponse(response: Response) {
        // Check response and see if there's an error with status code 200,
        let responseJSON = response.json();
        // TO DO : Contract set up for Error Object
        if (responseJSON.errorMessage) {
            //construct http error object from the response
            throw new HttpResponseError(200, responseJSON.errorMessage, responseJSON.errorDescription);
        }
        return responseJSON;
    }
    private handleError(error: any): Observable<any> {
        //if there's an error based on standardized format throw an error
        //and catch at component level
        let httpError = error instanceof HttpResponseError ? error : new HttpResponseError(error.status);
        this.globalErrorHandlerService.handleError(httpError);
        return Observable.throw(httpError);
    }

    private getHeaders(): Headers {
        let header = new Headers();
        return header;
    }

    public logout() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }
}
