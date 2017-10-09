import { CompCurrencyPipe } from './shared.module';
import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";


@Directive({ selector: "[CurrencyFormatter]" })
export class CurrencyFormatterDirective implements OnInit {

  private element: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CompCurrencyPipe
  ) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.value = this.currencyPipe.transform(this.element.value);
  }

  // @HostListener("focus", ["$event.target.value"])
  // onFocus(value) {
  //   this.el.value = this.currencyPipe.parse(value); // opossite of transform
  // }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.element.value = this.currencyPipe.transform(value);
  }

}