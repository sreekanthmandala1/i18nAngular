import { SampleOneComponent } from './components/sample-one/sample-one.component';
import { SampleComponent } from './components/sample/sample.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'sample' , component : SampleComponent
  },
  {
    path:'sampleOne' , component : SampleOneComponent
  },
  {
    path:'', redirectTo:'sample' , pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
