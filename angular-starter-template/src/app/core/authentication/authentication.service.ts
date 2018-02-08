import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UtilsService } from '../utils/utils.service';
import { GlobalErrorHandlerService } from '../global/globalerrorhandler.service'
import { Token } from './token';
import { HttpResponseError } from '../global/http-response-error'
import 'rxjs/Rx';


@Injectable()
export class AuthenticationService {
    private _authToken: string;
    private headers: HttpHeaders;
    constructor(private router: Router, private httpClient: HttpClient, 
        private globalErrorHandlerService : GlobalErrorHandlerService) {
        this.headers = this.getHeaders();
    }
    public get accessToken(): string {
        return localStorage.getItem('token');
    }
    public get isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null ? true : false;
    }
    public authenticate(authenticalUrl : string, credentials : any) : Observable<any> {
       return this.httpClient.post(authenticalUrl, credentials , {headers : this.headers })
        .map(response => this.handleResponse(response))   
        .catch(error => this.handleError(error))
    }
    private handleResponse(response: any) {
        // Check response and see if there's an error with status code 200,
        let responseJSON = response;
        // TO DO : Contract set up for Error Object
        if (responseJSON.errorMessage) {
            //construct http error object from the response
            throw new HttpResponseError(200, responseJSON.errorMessage, responseJSON.errorDescription);
        }
        localStorage.setItem('token', responseJSON.id_token || responseJSON.token)
        return responseJSON;
    }
    private handleError(error: any): Observable<any> {
        //if there's an error based on standardized format throw an error
        //and catch at component level
        let httpError = error instanceof HttpResponseError ? error : new HttpResponseError(error.status);
        let errorObject = this.globalErrorHandlerService.handleError(httpError);
        return Observable.throw(errorObject);
    }

    private getHeaders(): HttpHeaders {
        let header = new HttpHeaders();
        return header;
    }

    public logout() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }
}
