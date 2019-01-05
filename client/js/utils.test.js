import { listOfPropValues } from './utils';

describe('listOfPropValues', () => {
    [
        { prop: 'foo', expected: [1, 2, 3] },
        { prop: 'bar', expected: ['a', 'b', 'c'] },
        { prop: 'baz', expected: [true, false, true] }
    ].forEach(({ expected, prop }) => {
        it(`should return all ${prop} values from the input array of objects`, () => {
            expect(listOfPropValues([
                {
                    foo: 1,
                    bar: 'a',
                    baz: true
                },
                {
                    foo: 2,
                    bar: 'b',
                    baz: false
                },
                {
                    foo: 3,
                    bar: 'c',
                    baz: true
                }
            ], prop)).toEqual(expected);
        });
    });
});