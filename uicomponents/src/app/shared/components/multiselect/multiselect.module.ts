import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectComponent } from './multiselect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MultiselectComponent],
  exports : [MultiselectComponent]
})
export class MultiselectModule { }
