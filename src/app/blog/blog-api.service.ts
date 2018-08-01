import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CoreApiService } from "src/app/core/core-api.service";
import { Post } from "src/app/core/models/post.model";

@Injectable({
  providedIn: "root"
})
export class BlogApiService {
  constructor(private coreApiModule: CoreApiService) {}

  getPosts(): Observable<Post[]> {
    return this.coreApiModule.get("posts").pipe(map(data => data));
  }
}
