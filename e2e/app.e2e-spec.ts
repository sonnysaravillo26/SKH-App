import { SKHAppPage } from './app.po';

describe('skh-app App', () => {
  let page: SKHAppPage;

  beforeEach(() => {
    page = new SKHAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
