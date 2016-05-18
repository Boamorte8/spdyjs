import { SpdyjsPage } from './app.po';

describe('spdyjs App', function() {
  let page: SpdyjsPage;

  beforeEach(() => {
    page = new SpdyjsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('spdyjs works!');
  });
});
