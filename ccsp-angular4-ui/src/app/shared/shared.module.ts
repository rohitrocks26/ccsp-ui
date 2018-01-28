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
        ButtonComponent, RadiobuttonComponent, SwitchComponent, TooltipComponent
     } from './index';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ProgressspinnerComponent } from './components/progressspinner/progressspinner.component';
import { PanelComponent } from './components/panel/panel.component';
import { TableComponent } from './components/table/table.component';
import { IconComponent } from './components/icon/icon.component';
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CommonModule,FormsModule,CurrencyPipeModule,AutoCompleteComponent,
    PaginationComponent,NavbarComponent,ModalComponent,InputComponent,
    DatepickerComponent,CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent, SelectDropdownComponent, CheckboxComponent,TextareaComponent,
    ButtonComponent, RadiobuttonComponent, SwitchComponent,TooltipComponent,
    ProgressbarComponent, ProgressspinnerComponent, PanelComponent, TableComponent,
    IconComponent
  ],
  declarations: [
    AutoCompleteComponent, PaginationComponent,
    NavbarComponent, ModalComponent,
    InputComponent, DatepickerComponent,
    CurrencyFormatterDirective, DirectivecontainerComponent,
    ErrorComponent, SelectDropdownComponent, CheckboxComponent, TextareaComponent, 
    ButtonComponent, RadiobuttonComponent, SwitchComponent, TooltipComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
    PanelComponent,
    TableComponent,
    IconComponent
    ]
})
export class SharedModule { }  