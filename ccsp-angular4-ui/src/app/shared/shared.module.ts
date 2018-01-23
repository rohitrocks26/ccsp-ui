import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent, PaginationComponent,
        NavbarComponent, ModalComponent,
        InputComponent, DatepickerComponent,
        CurrencyFormatterDirective, CurrencyPipeModule,
        ErrorComponent, DirectivecontainerComponent,
        SelectDropdownComponent, CheckboxComponent, TextareaComponent,
        ButtonComponent, RadiobuttonComponent, SwitchComponent
     } from './index';
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CommonModule,FormsModule,CurrencyPipeModule,AutoCompleteComponent,
    PaginationComponent,NavbarComponent,ModalComponent,InputComponent,
    DatepickerComponent,CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent, SelectDropdownComponent, CheckboxComponent,TextareaComponent,
    ButtonComponent, RadiobuttonComponent, SwitchComponent
  ],
  declarations: [
    AutoCompleteComponent, PaginationComponent,
    NavbarComponent, ModalComponent,
    InputComponent, DatepickerComponent,
    CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent, SelectDropdownComponent, CheckboxComponent, TextareaComponent, 
    ButtonComponent, RadiobuttonComponent, SwitchComponent
    ]
})
export class SharedModule { }  