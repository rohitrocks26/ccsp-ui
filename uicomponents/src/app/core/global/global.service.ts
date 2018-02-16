import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpResponseError } from './http-response-error';
import { GlobalErrorHandlerService } from './globalerrorhandler.service';
import { Observable } from 'rxjs/Rx'
import 'rxjs/Rx';

@Injectable()
export class GlobalService {
    private headers: HttpHeaders;

    constructor(private httpClient: HttpClient, private authService: AuthenticationService,
        private globalErrorHandlerService: GlobalErrorHandlerService) {
    }
    public getRequest(requestUrl: string, urlParameters?: any, addAuthToken?: boolean,
        headers?: any ): Observable<any> {
        // Set the headers and optional query parameters for the request
        let requestOptions = {};
        requestOptions['headers'] = this.getHeaders(addAuthToken, headers);
        if (urlParameters) requestOptions['params'] = this.getParams(urlParameters);

        //Return a get observable for making a get request
        return this.httpClient
            .get(requestUrl, requestOptions)
            .map(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }
    public postRequest(requestUrl: string, postBody: any, urlParameters?: any, addAuthToken?: boolean,
        headers? : any ): Observable<any> {
        // Set the headers and optional query parameters for the request
        let requestOptions = {};
        requestOptions['headers'] = this.getHeaders(addAuthToken, headers);
        if (urlParameters) requestOptions['params'] = this.getParams(urlParameters);;

        //Return a post observable for making a post request
        return this.httpClient.post(requestUrl, postBody, requestOptions)
            .map(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }
    public uploadExcel(requestUrl: string, postBody: any): Observable<any> {
        //Function to upload an excel file to a url endpoint
        let options = {};
        return this.httpClient.post(requestUrl, postBody, options)
            .map(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }
    private getHeaders(addAuthToken: boolean, headers?: any): HttpHeaders {
        //Sets the headers for the request
        let httpHeaders = new HttpHeaders();
        if(headers){
            for(let key in headers)
            httpHeaders = httpHeaders.append(key, headers[key])
        }
        //Add Authorization header if the addAuthToken is true and if there exists a token
        let token = this.authService.accessToken;
        if (addAuthToken && token !== undefined)
            httpHeaders = httpHeaders.append('Authorization', `Bearer  ${token}`);
        return httpHeaders;
    }
    getParams(urlParameters: any): HttpParams {
        //Add query string parameters to the request
        let params = new HttpParams();
        for (const key in urlParameters) {
            if (urlParameters.hasOwnProperty(key)) {
                const val = urlParameters[key];
                if (val !== null && val !== undefined) {
                    params = params.append(key, val.toString());
                }
            }
        }
        return params;
    }
    private handleResponse(response: any) {
        // Check response and see if there's an error with status code 200,
        let responseJSON = response;
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
        let errorObject = this.globalErrorHandlerService.handleError(httpError);
        return Observable.throw(errorObject);
    }
}