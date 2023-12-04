import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackOnOff]'
})
export class BetterHightlightDirective implements OnInit {

  @Input() defaultcolor:string='transparent';
  @Input() hightlightcolor:string='blue';
  @HostBinding('style.backgroundColor') background: string;

  constructor(private elRef:ElementRef,private rendrer:Renderer2) { }
  ngOnInit() {
  //  this.rendrer.setStyle(this.elRef.nativeElement,'background-color','blue');
        this.background=this.defaultcolor;
      }
    @HostListener('mouseenter') mouseover(event:Event){
     // this.rendrer.setStyle(this.elRef.nativeElement,'background-color','blue');
        this.background=this.hightlightcolor;
    }

    @HostListener('mouseleave') mouseleave(event:Event){
      // this.rendrer.setStyle(this.elRef.nativeElement,'background-color','red');
        this.background=this.defaultcolor;
    }
}
