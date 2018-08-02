import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.css("app-root h1")).getText();
  }

  getInputValue() {
    return element(by.css(".blog-input"));
  }

  getP() {
    return element(by.css(".jk article .c1"));
  }

  getP2() {
    return element(by.tagName("app-blog-post")).element(
      by.css(":nth-child(2)")
    );
  }

  getP3() {
    return element(by.tagName("app-blog-post")).element(by.css(".c1"));
  }
}
