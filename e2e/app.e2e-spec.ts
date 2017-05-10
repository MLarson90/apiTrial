import { FunderPage } from './app.po';

describe('funder App', () => {
  let page: FunderPage;

  beforeEach(() => {
    page = new FunderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
