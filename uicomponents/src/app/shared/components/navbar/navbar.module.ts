import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [NavbarComponent],
  exports : [NavbarComponent]
})
export class NavbarModule { }
