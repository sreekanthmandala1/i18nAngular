import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOneComponent } from './list-one/list-one.component';

const routes: Routes = [
  {
    path:'listOne', component:ListOneComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule { }
