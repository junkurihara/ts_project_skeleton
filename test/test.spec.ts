import * as hello from '../src/index';
import {expect} from 'chai';

describe('Test skeleton', () => {
    it('Test 1', () => {
        const val: string = hello.hello('omg');
        console.log(val);
        expect(typeof val === "string").to.be.true;

        const val2: string = hello.hello2('omgomg');
        console.log(val2);
        expect(typeof val2 === "string").to.be.true;
    });

});
