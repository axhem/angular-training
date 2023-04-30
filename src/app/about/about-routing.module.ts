import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { YouComponent } from './you/you.component';

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'you', component: YouComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
