import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "src/app/core/core.module";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogCommentComponent } from "./blog-comment/blog-comment.component";
import { BlogApiService } from "./blog-api.service";
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpModule, HttpClientModule, CoreModule],
  providers: [BlogApiService],
  declarations: [BlogPostComponent, BlogCommentComponent],
  exports: [BlogPostComponent, BlogCommentComponent]
})
export class BlogModule {}
