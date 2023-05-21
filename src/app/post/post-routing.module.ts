import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DirectivesComponent } from './directives/directives.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ObserverableComponent } from '../rxjs/observerable/observerable.component';

const routes: Routes = [
  {path:'', component: PostComponent},
  {path:'post-details/:id', component: PostDetailsComponent},
  {path:'post-edit/:id', component: PostEditComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'observerable', component: ObserverableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
