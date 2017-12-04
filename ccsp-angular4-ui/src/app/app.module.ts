import { AutoCompleteComponent } from './common/components/autocomplete/autocomplete.component';
import { NgAutoCompleteModule } from "./common/components/autocomplete/auto-complete";
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
import { DatepickerComponent } from './common/components/datepicker/datepicker.component';
import { CurrencyFormatterDirective } from './common/directives/currency-formatter.directive';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { DirectivecontainerComponent } from './common/directives/directivecontainer/directivecontainer.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { LoginComponent } from './login/login.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { MemberAccumsInquiryComponent } from './member-accums-inquiry/member-accums-inquiry.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorComponent } from './common/components/error/error.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root-reducer';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { PostsComponent } from './demo-container/posts/posts.component';
import { CoreModule } from './core/core.module';

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
    DirectivecontainerComponent,
    DemoPageComponent,
    LoginComponent,
    MemberAccumsInquiryComponent,
    ErrorComponent,
    DemoContainerComponent,
    PostsComponent
  ],
  imports: [
    CoreModule,
    NgAutoCompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES,
    { useHash: true, preloadingStrategy: PreloadAllModules }),
    ToastModule.forRoot(),
    StoreModule.forRoot(rootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
