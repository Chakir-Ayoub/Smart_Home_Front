import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHightLightDirective]'
})
export class BasicHightLightDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef){}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor='green';
  }
}
