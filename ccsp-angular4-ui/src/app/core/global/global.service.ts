import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpResponseError } from './http-response-error';
import { GlobalErrorHandlerService } from './globalerrorhandler.service';
import { Observable } from 'rxjs/Rx'
import 'rxjs/Rx';

@Injectable()
export class GlobalService {
    private headers : Headers;
    private requestOptions : RequestOptions;

    constructor(private httpClient : Http, private authService : AuthenticationService,
    private globalErrorHandlerService : GlobalErrorHandlerService ) {
        this.headers = this.getHeaders();
    }
    public getRequest ( requestUrl : string, urlParameters ? : any ) : Observable<any> {
        // Set the headers and optional query parameters for the request
        let requestOptions = new RequestOptions();
        requestOptions.headers = this.headers;
        requestOptions.params = urlParameters;
        
        //Return a get observable for making a get request
        return this.httpClient
        .get(requestUrl, requestOptions)
        .map(response => this.handleResponse(response))
        .catch(error => this.handleError(error))
    } 
    public postRequest (requestUrl : string, postBody : any, urlParameters ? : any) : Observable<any> {
         // Set the headers and optional query parameters for the request
        let requestOptions = new RequestOptions();
        requestOptions.headers = this.headers;
        requestOptions.params = urlParameters;

         //Return a post observable for making a post request
        return this.httpClient.post(requestUrl, postBody, requestOptions )
        .map(response => this.handleResponse(response))
        .catch(error => this.handleError(error))
    }
    public uploadExcel (requestUrl : string, postBody : any) : Observable<any> {
        let options = new RequestOptions();
        return this.httpClient.post(requestUrl, postBody, options )
        .map(response => this.handleResponse(response))
        .catch(error => this.handleError(error))
    }
    private getHeaders () : Headers {
        let header = new Headers();
        let token = this.authService.accessToken;
        if (token !== undefined)
            header.set('Authorization', `Bearer  ${token}`);
        return header;
    }
    private handleResponse(response : Response) {
        // Check response and see if there's an error with status code 200,
        let responseJSON = response.json();
        // TO DO : Contract set up for Error Object
        if(responseJSON.errorMessage)
        {
            //construct http error object from the response
             throw new HttpResponseError(200, responseJSON.errorMessage, responseJSON.errorDescription);
        }
        return responseJSON;
    }
    private handleError(error : any) : Observable<any> {
        //if there's an error based on standardized format throw an error
        //and catch at component level
        let httpError = error instanceof HttpResponseError ? error : new HttpResponseError(error.status);
        let errorObject = this.globalErrorHandlerService.handleError(httpError);
        return Observable.throw(errorObject);
    }
}