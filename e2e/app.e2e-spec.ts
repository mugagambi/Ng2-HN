import { RailConnectPage } from './app.po';

describe('rail-connect App', function() {
  let page: RailConnectPage;

  beforeEach(() => {
    page = new RailConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
