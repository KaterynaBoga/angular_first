import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveComponent } from './five/five.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FiveComponent],
  exports: [FiveComponent]
})
export class FiveModule { }
