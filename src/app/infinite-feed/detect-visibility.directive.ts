import { Directive, ElementRef, AfterViewInit, Input, Output, EventEmitter, OnDestroy, SimpleChanges, OnChanges} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Directive({
  selector: '[detectedVisibility]',
})
export class DetectVisibilityDirective implements AfterViewInit, OnDestroy, OnChanges {
  @Input() root: CdkVirtualScrollViewport;
  @Input() idx: number;
  @Output() detectedVisibility = new EventEmitter<boolean>();

  private observer?: IntersectionObserver;
  private isVisible = false;
  constructor(private el: ElementRef) {
    this.detectVisibility = this.detectVisibility.bind(this);
  }

  ngAfterViewInit() {
    this.setupObserver();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.idx || this.idx === undefined) {
      return;
    }
    if (this.observer) {
      this.observer.disconnect();
    }
    this.setupObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    this.observer = new IntersectionObserver(this.detectVisibility, {
      root: this.root.elementRef.nativeElement,
      threshold: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0]
    });
    this.observer.observe(this.el.nativeElement);
  }

  private detectVisibility(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    const currentVisibility = entries[0].intersectionRatio >= 0.1;
    if (this.isVisible !== currentVisibility) {
      this.isVisible = currentVisibility;
      this.detectedVisibility.emit(this.isVisible);
    }
  }
}
