export class SpdyjsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('spdyjs-app h1')).getText();
  }
}
