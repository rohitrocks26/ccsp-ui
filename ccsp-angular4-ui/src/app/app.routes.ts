import { RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { AuthGuard } from './core';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';

const routes: Routes = [
      {
        path:'',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path:'demoPage',
        loadChildren:'./demo-page/demo-page.module#DemoPageModule',
        canActivate : [AuthGuard]
      },
      {
        path:'demoContainer',
        component: DemoContainerComponent,
        canActivate : [AuthGuard]
      }
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, 
  { 
   useHash : true, 
   preloadingStrategy : PreloadAllModules
  });
 