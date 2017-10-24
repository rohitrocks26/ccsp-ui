import { CanactivateauthguardService } from './common/services/canactivateauthguard.service';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  {
    path:'',
    children:[
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
        redirectTo:'dashboard'
      }
    ]
  }
];
