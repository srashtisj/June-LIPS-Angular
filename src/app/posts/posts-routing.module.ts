import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostsAddComponent } from './posts-add/posts-add.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:userid/view/:id', component: PostsAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
