import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input('ySpeed') set parallaSpeedY(val: number) {
    this.ySpeed = val ? val : 0;
  }

  @Input('xSpeed') set parallaSpeedX(val: number) {
    this.xSpeed = val ? val : 0;
  }

  private ySpeed: number = 0;
  private xSpeed: number = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    const { x, y } = this.getTranslation();

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'style',
      `transform: translate(${x}px, ${y}px)`);
  }

  private getTranslation(): { x: number; y: number } {
    return {
      x: window.scrollY * this.xSpeed / 10,
      y: window.scrollY * this.ySpeed / 10
    }
  }
}
