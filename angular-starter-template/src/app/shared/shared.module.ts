import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import {DatepickerComponent,
        CurrencyFormatterDirective, CurrencyPipeModule,
        ErrorComponent, DirectivecontainerComponent, ModalComponent
     } from './index';
@NgModule({
  imports : [FormsModule, CommonModule],
  exports: [CommonModule,FormsModule,CurrencyPipeModule,
    DatepickerComponent,CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent, ModalComponent
  ],
  declarations: [DatepickerComponent, CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent, ModalComponent
    ]
})
export class SharedModule { }  