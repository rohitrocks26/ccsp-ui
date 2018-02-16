import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from '../..';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AutoCompleteComponent],
  exports : [AutoCompleteComponent]
})
export class AutocompleteModule { }
