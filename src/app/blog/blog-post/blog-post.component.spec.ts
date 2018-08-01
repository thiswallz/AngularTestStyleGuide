import {
  fakeAsync,
  async,
  tick,
  ComponentFixture,
  TestBed
} from "@angular/core/testing";
import { BlogApiService } from "../blog-api.service";
import { BlogPostComponent } from "./blog-post.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { of } from "rxjs";

describe("BlogPostComponent", () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;
  let blogApiService: BlogApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule],
      declarations: [BlogPostComponent],
      providers: [BlogApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Injecting service from TestBed
    // Now you can use this service as you wish
    blogApiService = TestBed.get(BlogApiService);
  });

  afterEach(() => {
    // cleaning vars after each unit test
    blogApiService = null;
    component = null;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // Using async to call real ajaz/async requests
  it("should call getPost and fill the list (Integration TEST)", async(() => {
    // This Unit test is not the best way to do it
    // Reason? is too slow and it depends on external services
    component.ngOnInit();
    setTimeout(function() {
      expect(component.list.length).toBeGreaterThan(0);
    }, 1000);
  }));

  // Using fakeAsync to fake ajax/async requests
  it(
    "should call getPost and fill the list",
    fakeAsync(() => {
      // Using spyOn to fake the response, in this case we create an Observable
      // Using of from rxjs (before rxjs 6 you can use Observable.of)
      const spy = spyOn(blogApiService, "getPosts").and.returnValue(
        of([
          {
            userId: 1,
            id: 1,
            title: "eprehenderit",
            body: "st autem sunt rem eveniet architecto"
          },
          {
            userId: 1,
            id: 2,
            title: "qui est eache",
            body: "periam non debitis posimus qui neque nisi nulla"
          }
        ])
      );
      component.ngOnInit();
      expect(component.list.length).toEqual(2);
      expect(spy).toHaveBeenCalled();
    })
  );
});
