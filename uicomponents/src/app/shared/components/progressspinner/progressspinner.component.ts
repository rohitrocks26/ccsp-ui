import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.scss']
})
export class ProgressspinnerComponent implements OnInit {
  @Input() width : number = 30;
  @Input() height : number = 30;
  @Input() spinnerColor : string = "blue";
  public thewidth : string = "60px";
  public theheight : string = "60px";
  constructor() { }

  ngOnInit() {
    console.log(this.spinnerColor);
  }

}
