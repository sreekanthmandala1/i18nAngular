import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ListOneComponent } from './list-one/list-one.component';


@NgModule({
  declarations: [
    ListOneComponent
  ],
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ]
})
export class ModuleOneModule { }
