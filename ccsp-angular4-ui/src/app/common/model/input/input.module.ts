import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class InputModule {
  constructor(public name:string , public value:string, public placeholder:string , public type:string ){
    this.name=name;
    this.value=value;
    this.placeholder=placeholder;
    this.type=type;
  }
 }
