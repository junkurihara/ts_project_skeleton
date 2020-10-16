// https://github.com/mtiller/ts-jest-sample

import {getTestEnv} from './prepare';
const env = getTestEnv();
const hello = env.library;

describe(`Test skeleton: Test from ${env.envName}`, () => {
  it('Test 1', () => {
    console.log(env.message);

    const val: string = hello.hello('omg');
    console.log(val);
    expect(typeof val === 'string').toBeTruthy();

  });
});
