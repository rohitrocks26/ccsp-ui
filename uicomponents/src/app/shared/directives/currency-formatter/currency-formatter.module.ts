import { FormsModule } from '@angular/forms';
import { CurrencyFormatterDirective } from './currency-formatter.directive';
import { CurrencyPipeModule } from './../../modules/currency-pipe/currency-pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DirectivecontainerComponent } from './directivecontainer/directivecontainer.component';

@NgModule({
  imports: [
    CommonModule,
    CurrencyPipeModule,
    FormsModule
  ],
  declarations: [CurrencyFormatterDirective, DirectivecontainerComponent],
  exports : [CurrencyFormatterDirective, CurrencyPipeModule, DirectivecontainerComponent]
})
export class CurrencyFormatterModule { }
