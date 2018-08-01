import { TestBed, inject } from "@angular/core/testing";
import { CoreApiService } from "./core-api.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

describe("CoreApiService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule],
      providers: [CoreApiService]
    });
  });

  it("should be created", inject(
    [CoreApiService],
    (service: CoreApiService) => {
      expect(service).toBeTruthy();
    }
  ));
});
