import { NgModule , DebugElement} from '@angular/core';
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
 export const ButtonClickEvents = {
  left:  { button: 0 },
  right: { button: 2 }
};
export function click(element: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
 if (element instanceof HTMLElement) {   
   element.click();
 } else {   
  element.triggerEventHandler('click', eventObj);
 }
}
