import { RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { AuthGuard } from './core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
      {
        path:'',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path:'demoPage',
        loadChildren:'./demo-page/demo-page.module#DemoPageModule',
        canActivate : [AuthGuard]
      }
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, 
  { 
   useHash : true
  });
 