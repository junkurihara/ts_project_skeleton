/**
 * index.ts
 */
export function hello(name: string): string {
    return 'hello ' + name;
}

export const hello2 = (name: string): string => {
    return 'hello hello ' + name;
};

// const str: string = 'Hello TypeScript';
// console.log(str);
// console.log(hello('void'));
// console.log(hello2('void'));
