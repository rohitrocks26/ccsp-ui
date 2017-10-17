import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
  } from '@angular/core';
  
  
  @Component({
    selector: 'paginationComponent',
    providers: [
    ],
    template: `<ul class="pagination">
    <ng-template ngFor let-item [ngForOf]="createRange()" let-currentElementIndex="(index + 1)" [ngForTrackBy]="trackByFn">
    <li (click)=onChangePage($event)><a id="{{item}}">{{item}}</a></li>
    </ng-template>
    </ul>
  `
  })
  export class PaginationComponent implements OnInit {
    @Input() totalNumberOfRecords:number;
    @Input() noOfRecordsInPage:number;
    @Output() pageClicked : EventEmitter<any> = new EventEmitter<any>(); 
    private val: string;
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
      console.log(this.totalNumberOfRecords+ this.noOfRecordsInPage);
     
     this.count=this.totalNumberOfRecords/this.noOfRecordsInPage;
     if(this.totalNumberOfRecords%this.noOfRecordsInPage!=0){
        this.count=this.count+1;
     }
      console.log(this.count);
    }
    private minCount:number;
    private maxcount:number;
    public onChangePage(ev){
      var id=ev.srcElement.id;
      this.minCount=(id*this.noOfRecordsInPage)-this.noOfRecordsInPage;
      this.maxcount=(id*this.noOfRecordsInPage)-1;
      if(this.maxcount>this.totalNumberOfRecords){
        this.maxcount=this.totalNumberOfRecords-1;
      }
      this.pageClicked.emit({"minCount":this.minCount,
                      "maxCount":this.maxcount});
    }
  }
  
  