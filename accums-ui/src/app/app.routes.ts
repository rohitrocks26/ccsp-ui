import {LandingPageComponent} from './landing-page/landing-page.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
      { 
        path:'member-inquiry',
        component:LandingPageComponent,
      },
      {
        path:'',
        component:LandingPageComponent
      },
      {
        path:'**',
        redirectTo:''
      }
];
