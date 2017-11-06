import { CanactivateauthguardService } from './common/services/canactivateauthguard.service';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import {MemberAccumsInquiryComponent} from './member-accums-inquiry/member-accums-inquiry.component'


export const ROUTES: Routes = [
      {
        path:'',
        component:LoginComponent
      },
      { 
        path:'dashboard',
        component:DemoPageComponent
      },
      {
        path:'memberInquiry',
        component:MemberAccumsInquiryComponent
      },
      {
        path:'demoContainer',
        component:DemoContainerComponent
      },
];
