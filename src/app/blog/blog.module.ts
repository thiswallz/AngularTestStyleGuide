import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogPostComponent, BlogCommentComponent]
})
export class BlogModule { }
