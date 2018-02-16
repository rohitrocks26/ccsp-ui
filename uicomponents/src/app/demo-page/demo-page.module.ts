import { MultiselectModule } from './../shared/components/multiselect/multiselect.module';
import { NavbarModule } from './../shared/components/navbar/navbar.module';
import { PanelModule } from './../shared/components/panel/panel.module';
import { ProgressspinnerModule } from './../shared/components/progressspinner/progressspinner.module';
import { ProgressbarModule } from './../shared/components/progressbar/progressbar.module';
import { TooltipModule } from './../shared/components/tooltip/tooltip.module';
import { CurrencyFormatterModule } from './../shared/directives/currency-formatter/currency-formatter.module';
import { ModalModule } from './../shared/components/modal/modal.module';
import { DatepickerModule } from '../shared/components/datepicker/datepicker.module';
import { SharedModule } from './../shared/shared.module';
import { DemoPageComponent } from './demo-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { demoPageRoutes } from './demo-page.routes';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CollapseModule } from '../shared/components/collapse/collapse.module';
import { BreadcrumbModule } from '../shared/components/breadcrumb/breadcrumb.module';
import { AutocompleteModule } from '../shared/components/autocomplete/autocomplete.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { SwitchModule } from '../shared/components/switch/switch.module';

@NgModule({
    imports: [
        demoPageRoutes,
        SharedModule,
        DatepickerModule,
        CollapseModule,
        BreadcrumbModule,
        ModalModule,
        AutocompleteModule,
        PaginationModule,
        CurrencyFormatterModule,
        SwitchModule,
        TooltipModule,
        ProgressbarModule,
        ProgressspinnerModule,
        PanelModule,
        NavbarModule,
        MultiselectModule
    ],
    declarations: [
        DemoPageComponent
    ]
  })
  export class DemoPageModule {
      
  }