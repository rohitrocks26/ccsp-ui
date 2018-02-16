import { DemoPageComponent } from './demo-page.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DemoPageComponent }
];

export const demoPageRoutes: ModuleWithProviders = RouterModule.forChild(routes);