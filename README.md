# AdvancedUnitTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Services

- [1.1](#tdd-async-processes) Use fakeAsync and SpyOn for asyncs processes

- See more details in [`blog-post.component.spec.ts`](https://github.com/thiswallz/AngularTestStyleGuide/blob/master/src/app/blog/blog-post/blog-post.component.spec.ts)

  > Why? This ensures that you can run the unit test faster(Important item if you want to use CI/CD) and without side-effects focusing just in the unit test not an integration test

```javascript
// bad
it("should call getPost and fill the list (Integration TEST)", async(() => {
  // This Unit test is not the best way to do it
  // Reason? is too slow and it depends on external services
  component.ngOnInit();
  setTimeout(function() {
    expect(component.list.length).toBeGreaterThan(0);
  }, 1000);
}));

// good
it(
  "should call getPost and fill the list",
  fakeAsync(() => {
    // Using spyOn to fake the response, in this case we create an Observable
    // Using of from rxjs (before rxjs 6 you can use Observable.of)
    const spy = spyOn(blogApiService, "getPosts").and.returnValue(
      of([
        {
          ...
        },
        {
          ...
        }
      ])
    );
    component.ngOnInit();
    expect(component.list.length).toEqual(2);
    expect(spy).toHaveBeenCalled();
  })
);
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
