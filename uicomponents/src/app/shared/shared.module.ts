import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import {
        ErrorComponent
     } from './index';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ProgressspinnerComponent } from './components/progressspinner/progressspinner.component';
import { PanelComponent } from './components/panel/panel.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CommonModule,FormsModule,
    ErrorComponent,
    TableComponent
  ],
  declarations: [
    TableComponent, ErrorComponent
    ]
})
export class SharedModule { }  