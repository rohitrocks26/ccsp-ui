import {LandingPageComponent} from './landing-page/landing-page.component';
import {MemberAccumsInquiryComponent} from './member-accums-inquiry/member-accums-inquiry.component';


import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
      {
        path : '',
        redirectTo : 'member-inquiry',
        pathMatch : 'full'
      },
      { 
        path:'member-inquiry',
        component: LandingPageComponent,
        children:[
          {
            path : '',
            redirectTo : 'member-accums-inquiry',
            pathMatch : 'prefix'
          },
          {
            path:'member-accums-inquiry',
            component: MemberAccumsInquiryComponent
          },
          {
            path:'something-else',
            component: LandingPageComponent
          }
        ]
      },
];
