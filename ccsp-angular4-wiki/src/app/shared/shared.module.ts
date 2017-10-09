import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from "@angular/core";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
export class NavbarModule{
   constructor(public url:string , public link :string ,public icon :string , public child : Array<any>){
     this.url = url;
     this.link = link;
     this.icon = icon;
     this.child= child;
   }
}
export class InputModel {
  "name":string;
  "id":string;
  "value":string;
  "placeHolder":string;
  "type":string;
}
export class SwitchModel{
  "id":string;
  "checked":boolean;
  "disable":boolean;
  "mandatory":boolean;
  "name":string;
}
export class SliderModel{
  "id": string;
  "name":string;
  "event":string;
}
export class SelectModel{
  "item":Array<any>;
  "placeholder":string;
}
export class MenuModel{
  "name":string;
  "id":string;
  "url":string;
}

export class ModalModule {
  constructor(public modelHeader:string, public modelContent:string){
    this.modelHeader = modelHeader;
    this.modelContent = modelContent;
  }
}
export class CompCurrencyPipe implements PipeTransform {
  
    private PREFIX: string
    private DECIMAL_SEPARATOR: string;
    private THOUSANDS_SEPARATOR: string;
    private SUFFIX: string
    
    constructor() {
      // TODO comes from configuration settings
      this.PREFIX = ''
      this.THOUSANDS_SEPARATOR = ",";
      this.SUFFIX = '$'
    }
  
    transform(value: string, fractionSize: number = 2): string {
      let [integer] = (value || "").toString()
        .split(".");
  
     
      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
  
    return this.PREFIX + integer ;
    }
  }

  export class FormSelectValueModule  { 
    constructor(public name:string , public id:string , public value:string , public selectoption : [{}] ){
    }
  }  