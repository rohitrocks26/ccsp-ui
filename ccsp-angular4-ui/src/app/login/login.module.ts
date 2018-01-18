import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginRoutes } from './login.routes';

@NgModule({
    imports: [
        SharedModule,
        loginRoutes
    ],
    declarations: [LoginComponent]
  })
  export class LoginModule {
      
  }