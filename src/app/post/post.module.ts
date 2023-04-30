import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostService } from '../services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers:[PostService]
})
export class PostModule { }
