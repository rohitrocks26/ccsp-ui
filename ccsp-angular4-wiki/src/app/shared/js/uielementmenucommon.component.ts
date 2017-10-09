import {
    Component,
    OnInit,
    Input
  } from '@angular/core';
  

  @Component({
    selector: 'menuComponent',
    providers: [
    ],
    template: `
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul class="nav navbar-nav">
      <ng-template ngFor let-item [ngForOf]="createRange()" let-currentEleentIndex="(index + 1)" [ngForTrackBy]="trackByFn">
      <li id="{{item.name}}"><a href="{{item.url}}">{{item.name}}</a></li>
      </ng-template>
      </ul>
    </div>
  </nav>
  `
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
  
  