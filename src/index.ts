/**
 * index.ts
 */

import BN from 'bn.js';
import jseu from 'js-encoding-utils';
import * as random from './random';

const millinum: number = 1545288535676620;
const goHex: string = 'e00c7d64bcf77115';

export function calc(): void {
  const bnNum: BN = (new BN(millinum)).mul(new BN(1000));
  const bin: Uint8Array = nwbo(bnNum, 8);
  console.log(`Equal to Hexdump from Golang? ${jseu.encoder.arrayBufferToHexString(bin) === goHex}`);

  const recoveredNum: any = nwboReverse(bin);
  console.log(recoveredNum.toString(10)); // export as string
}

const nwbo = (num: any, len: number): Uint8Array => {
  const arr: number[] = num.toArray('le', len);
  return new Uint8Array(arr);
};

const nwboReverse = (arr: Uint8Array): BN => {
  const val: BN = new BN(0);
  const base: BN = new BN(0x100);
  for (let i: number = 0; i < arr.length; i++) {
    const x: BN = new BN(arr[i]);
    val.iadd(x.mul(base.pow(new BN(i))));
  }
  return val;
};

export function hello(name: string): string {
  calc();
  console.log(random.getRandomBytes(8));
  console.log(random.getRandomAsciiString(16));
  return 'hello ' + name;
}

export const hello2 = (name: string): string => {
  return 'hello hello ' + name;
};

// const str: string = 'Hello TypeScript';
// console.log(str);
// console.log(hello('void'));
// console.log(hello2('void'));
