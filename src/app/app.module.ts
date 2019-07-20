import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfiniteFeedModule} from './infinite-feed/infinite-feed.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteFeedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
