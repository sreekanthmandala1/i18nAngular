import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { ListTwoComponent } from './list-two/list-two.component';


@NgModule({
  declarations: [
    ListTwoComponent
  ],
  imports: [
    CommonModule,
    ModuleTwoRoutingModule
  ]
})
export class ModuleTwoModule { }
