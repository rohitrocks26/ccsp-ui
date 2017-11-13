import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-dropdown',
  templateUrl: './table-dropdown.component.html',
  styleUrls: ['./table-dropdown.component.scss']
})
export class TableDropdownComponent implements OnInit {
  @Input() dropdownList : Array<any>;
  public isAllChecked : any = {};
  constructor() { }
  public get dropdownMessage() {
    let selected = false;
    for(let item of this.dropdownList) {
      if(item.selected) {
        selected = true;
      }
    }
    return selected ? "Selected" : "Select";
  }
  ngOnInit() {
  }
  selectAll(event,item,selectAll) {
    for (var i = 0; i < item.length; i++) {
      item[i].selected = selectAll.selected;
    }
  }
  checkIfAllSelected(event,item,selectAll) {
    selectAll.selected = item.every(function(items:any) {
        return items.selected == true;
      })
  }
}
