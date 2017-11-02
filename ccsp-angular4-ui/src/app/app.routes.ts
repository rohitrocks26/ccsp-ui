import { CanactivateauthguardService } from './common/services/canactivateauthguard.service';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MemberAccumsInquiryComponent} from './member-accums-inquiry/member-accums-inquiry.component'
export const ROUTES: Routes = [
      { 
        path:'dashboard',
        canActivate:[CanactivateauthguardService],
        component:DemoPageComponent
      },
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'**',
        redirectTo:''
      },
      {
        path:'memberInquiry',
        component:MemberAccumsInquiryComponent
      },
];
