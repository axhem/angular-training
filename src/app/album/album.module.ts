import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    ReactiveFormsModule
  ]
})
export class AlbumModule { }
