import { PomadoroTimerPage } from './app.po';

describe('pomadoro-timer App', () => {
  let page: PomadoroTimerPage;

  beforeEach(() => {
    page = new PomadoroTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
