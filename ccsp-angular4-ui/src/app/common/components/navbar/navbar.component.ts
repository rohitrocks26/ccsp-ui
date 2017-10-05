import {
    Component,
    OnInit,
    Input
  } from '@angular/core';
  

  @Component({
    selector: 'navbarComponent',
    providers: [
    ],
    templateUrl:'./navbar/navbar.component.html'
  })
  export class NavbarCommonComponent implements OnInit {
    
    @Input() public navbarList=Array<any>();
  
    private val: string;
    constructor(      
    ) {
      
    }
   createRange(){
      var items: number[] = [];
      for(var i = 0; i < this.navbarList.length; i++){
         items.push(this.navbarList[i]);
      }
      return items;
    }
    public ngOnInit() {
      
    }
  }
  
  