import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostsAddComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
