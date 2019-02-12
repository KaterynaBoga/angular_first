import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some/some.component';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    CommonModule, UserModule
  ],
  declarations: [SomeComponent],
  exports: [SomeComponent]
})
export class FirstModule { }
