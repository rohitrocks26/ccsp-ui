import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MemberAccumsInquiryComponent } from './member-accums-inquiry/member-accums-inquiry.component';
import { MemberAccumsSearchComponent } from './member-accums-search/member-accums-search.component';


import { CanactivateauthguardService } from './common/services/canactivateauthguard.service';
import { AutoCompleteComponent } from './common/components/autocomplete/autocomplete.component';
import { NgAutoCompleteModule } from "ng-auto-complete";
import { InputComponent } from './common/components/input/input.component';
import { ModalComponent } from './common/components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,PreloadAllModules} from '@angular/router';
import { ROUTES } from './app.routes';
import { PaginationComponent} from './common/components/pagination/pagination.component';
import { GlobalService, AuthenticationService ,Globals} from './common';
import { DatepickerComponent } from './common/components/datepicker/datepicker.component';
import { CurrencyFormatterDirective } from './common/directives/currency-formatter.directive';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { DirectivecontainerComponent } from './common/directives/directivecontainer/directivecontainer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    TabsComponent,
    MemberAccumsInquiryComponent,
    MemberAccumsSearchComponent,
     PaginationComponent,
    ModalComponent,
    DatepickerComponent,
    CurrencyFormatterDirective,
    InputComponent,
    AutoCompleteComponent,
    NavbarComponent,
    DirectivecontainerComponent,
  ],
  imports: [
       NgAutoCompleteModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES,
    { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [ GlobalService,
    AuthenticationService,
    CanactivateauthguardService,
    Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
