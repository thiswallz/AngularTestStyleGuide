import { Component, OnInit } from "@angular/core";
import { BlogApiService } from "src/app/blog/blog-api.service";
import { Post } from "src/app/core/models/post.model";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.css"]
})
export class BlogPostComponent implements OnInit {
  constructor(private blogApiService: BlogApiService) {}
  public list: Post[] = [];
  ngOnInit() {
    this.blogApiService.getPosts().subscribe(response => {
      this.list = response;
    });
  }
}
