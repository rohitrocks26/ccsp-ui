import { PaginationComponent } from './uielementpaginationcommon.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uielementpagination',
  templateUrl: './uielementpagination.component.html',
  styleUrls: ['./uielementpagination.component.css']
})
export class UielementpaginationComponent implements OnInit {

  constructor() { }
  public itemLength=100;
  public limit:number=10;
  public minCount:number=0;
  public maxCount:number=this.limit-1;
  /*list(){
      var items: Array<any> = [];
      for(var i = this.minCount; i <= this.maxCount; i++){
        
         items.push(this.items[i]);
         
      }
      return items;
    }*/
    changePage(ev){
      this.maxCount=ev.maxCount;
      this.minCount=ev.minCount;
  
    }
  ngOnInit() {
  }

}
