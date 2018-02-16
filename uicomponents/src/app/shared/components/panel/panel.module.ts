import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PanelComponent],
  exports : [PanelComponent]
})
export class PanelModule { }
