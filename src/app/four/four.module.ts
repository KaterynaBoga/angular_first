import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveModule } from '../five/five.module';

@NgModule({
  imports: [
    CommonModule,
    FiveModule
  ],
  declarations: [],
  exports: [FiveModule]
})
export class FourModule { }
