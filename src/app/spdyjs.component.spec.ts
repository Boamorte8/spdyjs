import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SpdyjsAppComponent } from '../app/spdyjs.component';

beforeEachProviders(() => [SpdyjsAppComponent]);

describe('App: Spdyjs', () => {
  it('should create the app',
      inject([SpdyjsAppComponent], (app: SpdyjsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'spdyjs works!\'',
      inject([SpdyjsAppComponent], (app: SpdyjsAppComponent) => {
    expect(app.title).toEqual('spdyjs works!');
  }));
});
