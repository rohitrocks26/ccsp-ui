import { Component, OnInit, Input,
    Output,
    EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
    
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input() itemLength:number;
    @Input() maxLimit:number;
    @Output() pageClicked : EventEmitter<any> = new EventEmitter<any>(); 
    private val: string;
    public selected;
    constructor(
    ) {}
    
      public count:number=1;
   createRange(){
      var items: number[] = [];
      for(var i = 1; i <= this.count; i++){
         items.push(i);
      }
      return items;
    }
    public ngOnInit() {
      console.log(this.itemLength+ this.maxLimit);
     this.count=this.itemLength/this.maxLimit;
     if(this.itemLength%this.maxLimit!=0){
        this.count=this.count+1;
     }
      console.log(this.count);
    }
    ngOnChanges(changes: SimpleChanges) {
      this.count=this.itemLength/this.maxLimit;
      if(this.itemLength%this.maxLimit!=0){

         this.count=Math.trunc(this.count)+1;
      }
       console.log(this.count);
    }
    private minCount:number;
    private maxcount:number;
    public onChangePage(ev,item){
      var id=ev.srcElement.id;
      //jQuery('#'+id).addClass('active');
      this.minCount=(id*this.maxLimit)-this.maxLimit;
      this.maxcount=(id*this.maxLimit)-1;
      if(this.maxcount>this.itemLength){
        this.maxcount=this.itemLength-1;
      }
      this.pageClicked.emit({"minCount":this.minCount,
                      "maxCount":this.maxcount});
    }
    isActive(item) {
      return this.selected === item;
  };
  }
  
  
