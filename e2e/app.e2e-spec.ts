import { Ngtranslate2Page } from './app.po';

describe('ngtranslate2 App', () => {
  let page: Ngtranslate2Page;

  beforeEach(() => {
    page = new Ngtranslate2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
