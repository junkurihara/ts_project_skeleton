/**
 * index.ts
 */

const millinum: number = 1545288535676620;

const goHex: string = 'e00c7d64bcf77115';

const jseu: any = require('js-encoding-utils');
const BN: any = require('bn.js');

export function calc(): void {
  const bnNum = (new BN(millinum)).mul(new BN(1000));
  const bin = nwbo(bnNum, 8);
  console.log(`Equal to Hexdump from Golang? ${jseu.encoder.arrayBufferToHexString(bin) === goHex}`);

  const recoveredNum: any = nwboReverse(bin);
  console.log(recoveredNum.toString(10)); // export as string
}

const nwbo = (num: any, len: number): Uint8Array => {
  const arr = num.toBuffer('le', len);
  return new Uint8Array(arr);
};

const nwboReverse = (arr: Uint8Array): any => {
  const val = new BN(0);
  const base = new BN(0x100);
  for (let i: number = 0; i < arr.length; i++) {
    const x = new BN(arr[i]);
    val.iadd(x.mul(base.pow(new BN(i))));
  }
  return val;
};

export function hello(name: string): string {
  calc();
  return 'hello ' + name;
}

export const hello2 = (name: string): string => {
  return 'hello hello ' + name;
};

// const str: string = 'Hello TypeScript';
// console.log(str);
// console.log(hello('void'));
// console.log(hello2('void'));
