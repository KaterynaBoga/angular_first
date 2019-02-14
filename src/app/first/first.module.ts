import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { TwoModule } from '../two/two.module';


@NgModule({
  imports: [CommonModule, TwoModule],
  declarations: [],
  exports: [TwoModule]
})
export class FirstModule { }
