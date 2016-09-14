import { SlapUiPage } from './app.po';

describe('slap-ui App', function() {
  let page: SlapUiPage;

  beforeEach(() => {
    page = new SlapUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
