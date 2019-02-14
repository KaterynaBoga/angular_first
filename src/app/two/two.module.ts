import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeModule } from '../three/three.module';
import { TwoComponent } from './two/two.component';
import { UserComponent } from './user/user.component';
import { NameComponent } from './name/name.component';
import { PhoneComponent } from './phone/phone.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  imports: [
    CommonModule,
    ThreeModule
  ],
  declarations: [TwoComponent, UserComponent, NameComponent, PhoneComponent, UserInfoComponent],
  exports: [ThreeModule, TwoComponent, UserInfoComponent]
})
export class TwoModule { }
