import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { FirstComponent } from './first/first/first.component';
import { TwoModule } from './two/two.module';
import { MyBootstrap } from './my-bootstrap';
import { filter } from "rxjs/operators";

export function bootstrapApp() {
  return () => {
    return new Promise((resolve, reject) => {
    new MyBootstrap().bootstrapApp()
    .pipe(filter(data => {
      
      return data === 'App bootstrap';
    }))
    .subscribe(data => {
      console.log(data);
      resolve(true);
    });
  });
  }
  
}

@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [BrowserModule, FirstModule], //получаем
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: bootstrapApp,
    multi: true
  }],
  entryComponents: [],
  bootstrap: [AppComponent],
  exports: [] //отдаем
})
export class AppModule { }
