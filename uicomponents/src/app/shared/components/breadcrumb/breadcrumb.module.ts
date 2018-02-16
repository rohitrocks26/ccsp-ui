import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [BreadcrumbComponent],
  exports : [BreadcrumbComponent]
})
export class BreadcrumbModule { }
