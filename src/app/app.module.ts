import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { FirstComponent } from './first/first/first.component';
import { TwoModule } from './two/two.module';


@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [BrowserModule, FirstModule],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent, FirstComponent],
  exports: []
})
export class AppModule { }
