import { Ntub0407Page } from './app.po';

describe('ntub0407 App', () => {
  let page: Ntub0407Page;

  beforeEach(() => {
    page = new Ntub0407Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
