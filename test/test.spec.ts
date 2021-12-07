// https://github.com/mtiller/ts-jest-sample

import {getTestEnv} from './prepare';
import * as lib from '../src/index';

let expect: any;

describe('Test skeleton', () => {
  before(async () => {
    const env = await getTestEnv();
    expect = env.expect;
  });

  it('Test 1', () => {
    const val: string = lib.hello('omg');
    console.log(val);
    expect(typeof val == 'string').to.be.true;
  });
});
