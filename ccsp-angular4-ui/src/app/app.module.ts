
import { AutoCompleteComponent } from './common/components/autocomplete/autocomplete.component';
import { NgAutoCompleteModule } from "ng-auto-complete";
import { InputComponent } from './common/components/input/input.component';
import { ModalComponent } from './common/components/modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule,PreloadAllModules} from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { PaginationComponent} from './common/components/pagination/pagination.component';
import { GlobalService, AuthenticationService } from './common';
import { DatepickerComponent } from './common/components/datepicker/datepicker.component';
import { CurrencyFormatterDirective } from './common/directives/currency-formatter.directive';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { DirectivecontainerComponent } from './common/directives/directivecontainer/directivecontainer.component';


@NgModule({
  declarations: [
    PaginationComponent,
    AppComponent,
    ModalComponent,
    DatepickerComponent,
    CurrencyFormatterDirective,
    InputComponent,
    AutoCompleteComponent,
    NavbarComponent,
    DirectivecontainerComponent
  ],
  imports: [
    NgAutoCompleteModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES,
    { useHash: false, preloadingStrategy: PreloadAllModules }),
    
  ],
  providers: [ 
    GlobalService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
