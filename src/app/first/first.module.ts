import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some/some.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SomeComponent],
  exports: [SomeComponent]
})
export class FirstModule { }
