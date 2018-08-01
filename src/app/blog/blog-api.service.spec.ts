import { TestBed, inject } from "@angular/core/testing";
import { CoreApiService } from "src/app/core/core-api.service";
import { BlogApiService } from "./blog-api.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

describe("BlogApiService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpModule],
      providers: [CoreApiService, BlogApiService]
    });
  });

  it("should be created", inject(
    [BlogApiService],
    (service: BlogApiService) => {
      expect(service).toBeTruthy();
    }
  ));
});
