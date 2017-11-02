import { browser, by, element } from 'protractor';
import {LoginComponent} from './login/login.component';
import { } from 'jasmine';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    await browser.get('/');
  });

/*it('should display correct title', function () {
  expect(browser.getTitle()).toEqual('Angular 2 end to end Testing');
});*/
it('should open and allow arrow keys to navigate between pokemon', () => {
element(by.buttonText('Save'));
})
});