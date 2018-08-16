import { hello } from '../src';
import { expect } from 'chai';
import 'mocha';

describe('Hello Function', () => {
  it('should return hello, world', () => {
    const result = hello();
    expect(result).to.equal('Hello, World')
  });
});
