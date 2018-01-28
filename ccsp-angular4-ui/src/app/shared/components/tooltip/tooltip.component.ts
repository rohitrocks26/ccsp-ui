import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var $ : any;
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() title : string;
  @Input() position : string;
  @Input() contentClass : any;
  @ViewChild('tooltipElement') tooltipElement : ElementRef;

  constructor() { }

  ngOnInit() {
    let toolTipEl = $(this.tooltipElement.nativeElement);
    toolTipEl.attr('title', this.title);
    toolTipEl.attr('data-placement', this.position);
    toolTipEl.tooltip();
  }

}
