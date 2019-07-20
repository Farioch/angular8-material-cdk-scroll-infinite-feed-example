import {ChangeDetectionStrategy, Component, ViewChild, ChangeDetectorRef, OnInit, AfterViewInit} from '@angular/core';
import { Subject } from 'rxjs';
import {mergeMap, startWith, filter, throttleTime} from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {DataService} from './feed-data.service';
import { trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'infinite-feed',
  templateUrl: 'infinite-feed.html',
  styleUrls: ['./infinite-feed.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('itemAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [
        animate('0.5s', style({ opacity: 1 }))
      ]),
      transition('visible => hidden', [
        animate('0.5s', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class InfiniteFeedComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollViewport', {static: true}) scrollViewport?: CdkVirtualScrollViewport;

  currentPage = 0;
  items: {id: number, value: string, visible?: boolean}[] = [];
  visibilityArr = [];

  private loadTrigger$ = new Subject();

  trackByIndex = (index: number, item: any) => index;

  constructor(private dataService: DataService,
              private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadTrigger$.pipe(
       startWith(undefined),
       throttleTime(100),
       mergeMap(() => this.loadItems())
    ).subscribe(items => {
      this.items = [...this.items, ...items];
      this.cd.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.scrollViewport.elementScrolled().pipe(
      filter(event => this.scrollViewport.getRenderedRange().end === this.scrollViewport.getDataLength())
    ).subscribe(() => {
      this.currentPage++;
      this.loadTrigger$.next();
    });
  }

  loadMore() {
    this.scrollViewport.scrollToIndex(0, 'smooth');
    const newItem = this.dataService.getNewData();
    this.items = [{...newItem, visible: true}, ...this.items];
  }

  private loadItems() {
    return this.dataService.getOldData(this.currentPage);
  }
}
