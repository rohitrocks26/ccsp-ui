import { LoginComponent } from './login.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

export const loginRoutes: ModuleWithProviders = RouterModule.forChild(routes);