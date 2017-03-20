import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  @Input() set dirUnless(condition: boolean){
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      this.vcRef.clear();
    }
  }
}
