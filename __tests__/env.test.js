import Env from '../public/js/env.js';

const env = new Env();

env.getNavigatorLanguage = () => {
  const languageStr = 'en-uk';
  return languageStr;
}

test('getNavigatorLanguage', () => {
  expect(env.getNavigatorLanguage()).toMatch('en-uk');
} );

test('getLanguageAndCountryFromBrowser', () => {
  expect(env.getLanguageAndCountryFromBrowser()).toEqual({language: 'en', country: 'uk'});
} );

test('getDefaultLanguageAndCountry', () => {
  expect(env.getDefaultLanguageAndCountry()).toEqual({language: 'en', country: 'uk'});
} );

test('getDefaultLanguageAndCountry when navigator.language empty', () => {
  env.getNavigatorLanguage = () => {
    const languageStr = '';
    return languageStr;
  }
  expect(env.getDefaultLanguageAndCountry()).toEqual({language: 'en', country: 'us'});
} );
