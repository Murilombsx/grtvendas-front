import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[grtDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    constructor(private el: ElementRef, private render: Renderer){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'opacity(50%)');
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'opacity(100%)');
    }

}