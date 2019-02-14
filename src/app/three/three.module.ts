import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourModule } from '../four/four.module';

@NgModule({
  imports: [
    CommonModule,
    FourModule
  ],
  declarations: [],
  exports: [FourModule]
})
export class ThreeModule { }
