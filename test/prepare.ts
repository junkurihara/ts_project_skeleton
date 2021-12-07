/**
 * prepare.ts
 */

export const getTestEnv = async () => {
  console.log(process.env.TEST_ENV);

  let expect;
  if(typeof window === 'undefined'){
    console.log('running on node.js');
    const testEnv = await import('chai');
    expect = testEnv.expect;
  } else {
    console.log('running on browser');
    const testEnv = await import('@open-wc/testing');
    expect = testEnv.expect;
  }

  return {expect};
};
