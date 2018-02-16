import { FormsModule } from '@angular/forms';
import { SwitchComponent } from './switch.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SwitchComponent],
  exports : [SwitchComponent]
})
export class SwitchModule { }
