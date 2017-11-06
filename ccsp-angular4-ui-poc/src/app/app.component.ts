import { Component ,ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    for(var i=0; i < 50; i++) {
      this.doThis();
    }
  }
  ngOnChanges() {
  for(var i=0; i < 50; i++) {
      this.doThis();
    }
  }
  doThis() {
    
  }
}
