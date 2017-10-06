import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ModalModule implements OnInit { 
  constructor(public modelHeader:string, public modelContent:string){
    this.modelHeader = modelHeader;
    this.modelContent = modelContent;
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
