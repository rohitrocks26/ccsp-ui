import { AuthGuard } from './common/services/authentication/auth-guard.service';
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
        component:DemoPageComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'memberInquiry',
        component:MemberAccumsInquiryComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'demoPage',
        component:DemoPageComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'demoContainer',
        component:DemoContainerComponent,
        canActivate:[AuthGuard]
      },
      { 
        path: '**',
        pathMatch: 'full', 
        component: LoginComponent 
      },
];
