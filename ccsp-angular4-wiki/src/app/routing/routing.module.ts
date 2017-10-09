import { UielementautocompleteComponent } from './../uielementautocomplete/uielementautocomplete.component';
import { UielementpaginationComponent } from './../uielementpagination/uielementpagination.component';
import { MaskingComponent } from './../masking/masking.component';
import { ScsspracticesComponent } from './../scsspractices/scsspractices.component';
import { TypescriptpracticeComponent } from './../typescriptpractice/typescriptpractice.component';
import { AngularpracticesComponent } from './../angularpractices/angularpractices.component';
import { LoginComponent } from './../login/login.component';
import { BlankComponent } from './../blank/blank.component';
import { UielementsearchComponent } from './../uielementsearch/uielementsearch.component';
import { UielementfileuploadComponent } from './../uielementfileupload/uielementfileupload.component';
import { UielementaccordionComponent } from './../uielementaccordion/uielementaccordion.component';
import { UielementloaderComponent } from './../uielementloader/uielementloader.component';
import { UielementdatepickerComponent } from './../uielementdatepicker/uielementdatepicker.component';
import { UielementlabelComponent } from './../uielementlabel/uielementlabel.component';
import { UielementswitchComponent } from './../uielementswitch/uielementswitch.component';
import { UielementmenuComponent } from './../uielementmenu/uielementmenu.component';
import { UielementnavbarComponent } from './../uielementnavbar/uielementnavbar.component';
import { UielementtabsComponent } from './../uielementtabs/uielementtabs.component';
import { UielementdropdownComponent } from './../uielementdropdown/uielementdropdown.component';
import { UielementselectComponent } from './../uielementselect/uielementselect.component';
import { UielementinputComponent } from './../uielementinput/uielementinput.component';
import { UielementgridComponent } from './../uielementgrid/uielementgrid.component';
import { UielementiconComponent } from './../uielementicon/uielementicon.component';
import { UielementtypographyComponent } from './../uielementtypography/uielementtypography.component';
import { UielementnotificationComponent } from './../uielementnotification/uielementnotification.component';
import { UielementbuttonComponent } from './../uielementbutton/uielementbutton.component';
import { UielementpanelComponent } from './../uielementpanel/uielementpanel.component';
import { FormsComponent } from './../forms/forms.component';
import { TablesComponent } from './../tables/tables.component';
import { MorrischartComponent } from './../morrischart/morrischart.component';
import { FlotchartComponent } from './../flotchart/flotchart.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  { path : '' , component : DashboardComponent},
  {path:'index',component : DashboardComponent},
  {path:'flotchart',component :FlotchartComponent},
  {path:'morrischarts',component : MorrischartComponent},
  {path:'table',component : TablesComponent},
  {path:'form',component : FormsComponent},
  {path:'panel-wells',component :UielementpanelComponent},
  {path:'buttons',component : UielementbuttonComponent},
  {path:'notifications',component : UielementnotificationComponent},
  {path:'typography',component : UielementtypographyComponent},
  {path:'grid',component : UielementgridComponent},
  {path:'input',component : UielementinputComponent},
  {path:'select',component : UielementselectComponent},
  {path:'dropdown',component : UielementdropdownComponent},
  {path:'tabs',component : UielementtabsComponent},
  {path:'navbar',component : UielementnavbarComponent},
  {path:'menu',component : UielementmenuComponent},
  {path:'switch',component : UielementswitchComponent},
  {path:'label',component : UielementlabelComponent},
  {path:'masking',component : MaskingComponent},
  {path:'datepicker',component : UielementdatepickerComponent},
  {path:'loader',component : UielementloaderComponent},
  {path:'accordion',component : UielementaccordionComponent},
  {path:'fileupload',component : UielementfileuploadComponent}, 
  {path:'search',component : UielementsearchComponent},
  {path:'icons',component : UielementiconComponent},
  {path:'pagination',component : UielementpaginationComponent},
  {path:'blank',component : BlankComponent},
  {path:'login',component : LoginComponent},
  {path:'angularpractice',component : AngularpracticesComponent},
  {path:'typescriptpractice',component : TypescriptpracticeComponent},
  {path:'scsspractices',component : ScsspracticesComponent},
  {path:'autocomplete',component : UielementautocompleteComponent},


  {path:'not-found', component:DashboardComponent},
  {path:'**' , redirectTo:'/not-found'}
]
@NgModule({
  imports :[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class RoutingModule { }
