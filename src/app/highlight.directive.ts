import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
    @HostListener('mouseenter') mouseover(){
      this.backgroundColor = 'white';
    };
    @HostListener('mouseleave') mouseleave(){
      this.backgroundColor = 'blue';
    };
    @HostBinding('style.backgroundColor') get setColor(){
      return this.backgroundColor;
    }
    private backgroundColor = 'blue';
    constructor() {
      // this.elementRef.nativeElement.style.backgroundColor = "green";
      // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','yellow');
  }

}
