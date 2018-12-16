import chai from 'chai';
const expect = chai.expect;
import {getTestEnv} from './prepare';
const env = getTestEnv();
const hello = env.library;
const message = env.message;
const envName = env.envName;

describe(`${envName}: Test skeleton`, () => {
    it('Test 1', () => {
        console.log(message);

        const val: string = hello.hello('omg');
        console.log(val);
        expect(typeof val === "string").to.be.true;

        const val2: string = hello.hello2('omgomg');
        console.log(val2);
        expect(typeof val2 === "string").to.be.true;
    });

});
