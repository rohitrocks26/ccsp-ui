import { SharedModule } from './../shared/shared.module';
import { DemoPageComponent } from './demo-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { demoPageRoutes } from './demo-page.routes';
import { NO_ERRORS_SCHEMA } from '@angular/core';
@NgModule({
    imports: [
        demoPageRoutes,
        SharedModule
    ],
    declarations: [
        DemoPageComponent
    ]
  })
  export class DemoPageModule {
      
  }