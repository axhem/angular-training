import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostService } from '../services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsComponent } from './comments/comments.component';
import { AppendWordPipe } from '../append-word-pipe.pipe';
import { UpperLowerPipe } from './upper-lower.pipe';
import { CurrencyPipe } from './currency.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightBackgroundDirective } from './highlight-background.directive';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ObserverableComponent } from '../rxjs/observerable/observerable.component';
import { Comp2Component } from '../rxjs/comp2/comp2.component';
import { Comp1Component } from '../rxjs/comp1/comp1.component';


@NgModule({
  declarations: [
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    AppendWordPipe,
    UpperLowerPipe,
    CurrencyPipe,
    DirectivesComponent,
    HighlightBackgroundDirective,
    PostEditComponent,
    ObserverableComponent,
    Comp2Component,
    Comp1Component
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers:[PostService]
})
export class PostModule { }
