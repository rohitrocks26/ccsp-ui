import { CanactivateauthguardService } from './common/services/canactivateauthguard.service';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';

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
        path:'demoContainer',
        component:DemoContainerComponent
      },
      {
        path:'**',
        redirectTo:''
      }
];
