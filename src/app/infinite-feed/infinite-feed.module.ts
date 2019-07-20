import {NgModule} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {DataService} from './feed-data.service';
import {InfiniteFeedComponent} from './infinite-feed.component';
import {DetectVisibilityDirective} from './detect-visibility.directive';

@NgModule({
  imports: [
    ScrollingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    InfiniteFeedComponent,
    DetectVisibilityDirective
  ],
  exports: [
    InfiniteFeedComponent
  ],
  providers: [DataService]
})
export class InfiniteFeedModule {}
