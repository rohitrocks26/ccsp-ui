import { AutoCompleteComponent } from './uielementautocomplete/uielementautocompletecommon';
import { NgAutocompleteComponent } from 'ng-auto-complete';
import { PaginationComponent } from './uielementpagination/uielementpaginationcommon.component';
import { CurrencyFormatterDirective } from './shared/currency-formatter.directive';
import { CompCurrencyPipe } from './shared/shared.module';
import { CurrencyPipe } from '@angular/common';


import { FilterpipeModule } from './filterpipe/filterpipe.module';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarCommonComponent } from './uielementnavbar/uielementnavbarcommon.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlotchartComponent } from './flotchart/flotchart.component';
import { MorrischartComponent } from './morrischart/morrischart.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { UielementpanelComponent } from './uielementpanel/uielementpanel.component';
import { UielementbuttonComponent } from './uielementbutton/uielementbutton.component';
import { UielementnotificationComponent } from './uielementnotification/uielementnotification.component';
import { UielementtypographyComponent } from './uielementtypography/uielementtypography.component';
import { UielementiconComponent } from './uielementicon/uielementicon.component';
import { UielementgridComponent } from './uielementgrid/uielementgrid.component';
import { UielementinputComponent } from './uielementinput/uielementinput.component';
import { UielementselectComponent } from './uielementselect/uielementselect.component';
import { UielementdropdownComponent } from './uielementdropdown/uielementdropdown.component';
import { UielementtabsComponent } from './uielementtabs/uielementtabs.component';
import { UielementnavbarComponent } from './uielementnavbar/uielementnavbar.component';
import { UielementmenuComponent } from './uielementmenu/uielementmenu.component';
import { UielementswitchComponent } from './uielementswitch/uielementswitch.component';
import { UielementlabelComponent } from './uielementlabel/uielementlabel.component';
import { UielementdatepickerComponent } from './uielementdatepicker/uielementdatepicker.component';
import { UielementloaderComponent } from './uielementloader/uielementloader.component';
import { UielementaccordionComponent } from './uielementaccordion/uielementaccordion.component';
import { UielementfileuploadComponent } from './uielementfileupload/uielementfileupload.component';
import { UielementsearchComponent } from './uielementsearch/uielementsearch.component';
import { BlankComponent } from './blank/blank.component';
import { LoginComponent } from './login/login.component';
import { AngularpracticesComponent } from './angularpractices/angularpractices.component';
import { TypescriptpracticeComponent } from './typescriptpractice/typescriptpractice.component';
import { ScsspracticesComponent } from './scsspractices/scsspractices.component';
import { InputComponent } from './uielementinput/uielementinputcommon.component';
import { ModalComponent } from './modal/modal.component';
import { MaskingComponent } from './masking/masking.component';
import { SelectComponent } from './select/select.component';
import { UielementpaginationComponent } from './uielementpagination/uielementpagination.component';
import { UielementautocompleteComponent } from './uielementautocomplete/uielementautocomplete.component';
import { NgAutoCompleteModule} from 'ng-auto-complete';
import { MenuComponentComponent } from './menu-component/menu-component.component';
 
@NgModule({
  declarations: [
    
    NavbarCommonComponent,
    FilterpipeModule,
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FlotchartComponent,
    MorrischartComponent,
    TablesComponent,
    FormsComponent,
    UielementpanelComponent,
    UielementbuttonComponent,
    UielementnotificationComponent,
    UielementtypographyComponent,
    UielementiconComponent,
    UielementgridComponent,
    UielementinputComponent,
    UielementselectComponent,
    UielementdropdownComponent,
    UielementtabsComponent,
    UielementnavbarComponent,
    UielementmenuComponent,
    UielementswitchComponent,
    UielementlabelComponent,
    UielementdatepickerComponent,
    UielementloaderComponent,
    UielementaccordionComponent,
    UielementfileuploadComponent,
    UielementsearchComponent,
    BlankComponent,
    LoginComponent,
    AngularpracticesComponent,
    TypescriptpracticeComponent,
    ScsspracticesComponent,
    InputComponent,
    CurrencyFormatterDirective,
    ModalComponent,
    MaskingComponent,
    SelectComponent,
    UielementpaginationComponent,
    PaginationComponent,
    UielementautocompleteComponent,
    AutoCompleteComponent,
    MenuComponentComponent
    
  ],
  imports: [
    BrowserModule, RouterModule,RoutingModule ,FormsModule,NgAutoCompleteModule
  ],
  providers: [CurrencyPipe, CompCurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
