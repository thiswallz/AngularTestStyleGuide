import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to app!");
  });

  it("should input be 100", () => {
    page.navigateTo();
    //const input = page.getInputValue();
    // await input.click();
    //expect(input.getAttribute("value")).toEqual("100");
    const p = page.getP();

    p.getTagName()
      .then(r => {
        expect(r).toEqual("p");
      })
      .catch(err => console.log(null, err));
    //    expect(await p.getInnerHtml()).toEqual("TEXT");

    const p2 = page.getP2();
    p2.getWebElement()
      .getText()
      .then(r => {
        console.log(r);

        expect(r).toEqual("asdasd");
      });
    p2.getTagName().then(r => {
      expect(r).toEqual("div");
    });

    const p3 = page.getP3();
    p3.getTagName().then(r => {
      expect(r).toEqual("p");
    });
  });
});
