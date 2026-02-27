'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true
    if all the letters in the string are different`, () => {
    expect(isIsogram('polygraphic')).toBe(true);
  });

  it(`should return false
    if any of the letters in the string repeat`, () => {
    expect(isIsogram('whoops')).toBe(false);
  });

  it(`should return false
    if any of the letters in the string repeat
    while ignoring the letter case`, () => {
    expect(isIsogram('Analogy')).toBe(false);
  });
});
