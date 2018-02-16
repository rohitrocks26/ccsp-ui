import { ProgressspinnerComponent } from './progressspinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProgressspinnerComponent],
  exports : [ProgressspinnerComponent]
})
export class ProgressspinnerModule { }
