import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent, PaginationComponent,
        NavbarComponent, ModalComponent,
        InputComponent, DatepickerComponent,
        CurrencyFormatterDirective, CurrencyPipeModule,
        ErrorComponent, DirectivecontainerComponent
     } from './index'
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [CommonModule,FormsModule,CurrencyPipeModule,AutoCompleteComponent,
    PaginationComponent,NavbarComponent,ModalComponent,InputComponent,
    DatepickerComponent,CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent
  ],
  declarations: [
    AutoCompleteComponent, PaginationComponent,
    NavbarComponent, ModalComponent,
    InputComponent, DatepickerComponent,
    CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent
    ]
})
export class SharedModule { }  