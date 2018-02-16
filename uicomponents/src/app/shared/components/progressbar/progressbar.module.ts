import { ProgressbarComponent } from './progressbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProgressbarComponent],
  exports : [ProgressbarComponent]
})
export class ProgressbarModule { }
