import { Injectable } from '@angular/core';
import { HttpResponseError } from './http-response-error';
import { Subject } from 'rxjs/Subject';
import { ErrorMessage } from './error-message';

@Injectable()
export class GlobalErrorHandlerService {
    public displayErrorSubject: Subject<any> = new Subject();

    constructor() {
    }
    handleError(error: HttpResponseError) {
        switch (error.status) {
            case 200: this.displayErrorSubject.next(error);
            return error;
            default:
                let errorObject = ErrorMessage.errorMap[error.status] || ErrorMessage.errorMap['default'];
                this.displayErrorSubject.next(errorObject);
                return errorObject;
        }
    }
    public getDisplayErrorSubject(): Subject<any> {
        return this.displayErrorSubject;
    }
}
