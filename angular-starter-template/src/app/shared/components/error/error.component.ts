import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { GlobalErrorHandlerService } from '@app/core';
import { Observable, Subscription } from 'rxjs'
import { HttpResponseError } from '@app/core';


@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public subscription: Subscription
  constructor(public viewContainerRef: ViewContainerRef,
    public globalErrorHandlerService: GlobalErrorHandlerService) { }

  ngOnInit() {
    this.subscription = this.globalErrorHandlerService.getDisplayErrorSubject().subscribe(error => this.showError(error));
  }
  showError(error: HttpResponseError) {
   console.log(`Error Message : ${error.errorMessage} 
              Error Description : ${error.errorDescription}`);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
