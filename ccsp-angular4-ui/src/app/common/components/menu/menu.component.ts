import {
    Component,
    OnInit,
    Input
  } from '@angular/core';
  

  @Component({
    selector: 'menuComponent',
    providers: [
    ],
    templateUrl: './menu.component.html',
  })
  export class MenuComponent implements OnInit {
    
    @Input() public menuList=Array<any>();
  
    private val: string;
    constructor(      
    ) {
      
    }
   createRange(){
      var items: number[] = [];
      for(var i = 0; i < this.menuList.length; i++){
         items.push(this.menuList[i]);
      }
      return items;
    }
    public ngOnInit() {
      
    }
  }
  
  