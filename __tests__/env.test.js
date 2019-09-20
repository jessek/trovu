import Env from '../public/js/env.js';

const env = new Env();

env.getNavigatorLanguage = () => {
  const languageStr = 'en-uk';
  return languageStr;
}

test('getNavigatorLanguage', () => {
  expect(env.getNavigatorLanguage()).toMatch('en-uk');
} );