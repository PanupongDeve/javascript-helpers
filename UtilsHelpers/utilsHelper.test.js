import UtilsHelper from '../UtilsHelper';

describe('testing utils helpers', () => {

    describe('testing booleantoString function', () => {
        test(`input true should be 'true' `, () => {
            const result = UtilsHelper.BooleanToString(true);
            expect(result).toEqual('true');
        });

        test(`input false should be 'false'`, () => {
            const result = UtilsHelper.BooleanToString(false);
            expect(result).toEqual('false');
        });

        test('input anything should be keep value', () => {
            const dataTest = 'Hello World';
            const result = UtilsHelper.BooleanToString(dataTest);
            expect(result).toEqual(dataTest);
        })
    });


    describe('testing object to Array function', () => {
        test('output should be Array', () => {
            const object = {
                name: 'Kitty',
                gender: 'Girls'
            }
            const result = UtilsHelper.changeObjectToArray(object);
            expect(Array.isArray(result)).toBe(true);
        });

        test('input is array to should be show error', () => {
            const object = ['Kittu', 'Grils'];
            try {
                const result = UtilsHelper.changeObjectToArray(object);  
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })

        test('input is string to should be show error', () => {
            const object = 'Hello World';
            try {
                const result = UtilsHelper.changeObjectToArray(object);
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })

        test('input is number be show error', () => {
            const object = 555;
            try {
                const result = UtilsHelper.changeObjectToArray(object);
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })

        test('input is boolean be show error', () => {
            const object = true;
            try {
                const result = UtilsHelper.changeObjectToArray(object);
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })
    });

    describe('testing object to cleanNullObject function', () => {
        test('output should be object', () => {
            const object = {
                name: 'Kitty',
                gender: null
            }
            const result = UtilsHelper.cleanNullObject(object);
            expect(Array.isArray(result)).toBe(false);
        });

        test('output should be correct', () => {
            let numberofattr = 0;
            const object = {
                name: 'Kitty',
                gender: null,
                value: undefined,
            }

            const result = UtilsHelper.cleanNullObject(object);

            for(let key in result) {
                if (result.hasOwnProperty(key)) {
                    ++numberofattr;
                 }
            }

            expect(numberofattr).toBe(1);
        });

        test('input is array to should be show error', () => {
            const object = ['Kittu', 'Grils'];
            try {
                const result = UtilsHelper.cleanNullObject(object);  
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })

        test('input is string to should be show error', () => {
            const object = 'Hello World';
            try {
                const result = UtilsHelper.cleanNullObject(object);
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })

        test('input is number be show error', () => {
            const object = 555;
            try {
                const result = UtilsHelper.cleanNullObject(object);
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })

        test('input is boolean be show error', () => {
            const object = true;
            try {
                const result = UtilsHelper.cleanNullObject(object);
            } catch (error) {
                expect(error).toBe('input must object');
            }
    
        })
    });


    describe('testing orderBy function', () => {
        test('should be sort array by asc', () => {
            const arrayTest = ['A', 'B', 'D', 'C'];
            const arrayTextExpected = ['A', 'B', 'C', 'D'];

            const result = UtilsHelper.orderBy(arrayTest);
    
            expect(result).toEqual(arrayTextExpected);
        });

        test('should be sort array by desc', () => {
            const arrayTest = ['A', 'B', 'D', 'C'];
            const arrayTextExpected = ['D', 'C', 'B', 'A'];

            const result = UtilsHelper.orderBy(arrayTest, null, 'desc');
    
            expect(result).toEqual(arrayTextExpected);
        });

        test('should be sort array object by asc', () => {
            const arrayTest = [
                { name: 'A'},
                { name: 'C'}, 
                { name: 'B'}, 
                { name: 'D' }
            ];
            const arrayTextExpected = [
                { name: 'A'},
                { name: 'B'}, 
                { name: 'C'}, 
                { name: 'D' }
            ];

            const result = UtilsHelper.orderBy(arrayTest, 'name');
    
            expect(result).toEqual(arrayTextExpected);
        });

        test('should be sort array object by desc', () => {
            const arrayTest = [
                { name: 'A'},
                { name: 'C'}, 
                { name: 'B'}, 
                { name: 'D' }
            ];
            const arrayTextExpected = [
                { name: 'D'},
                { name: 'C'}, 
                { name: 'B'}, 
                { name: 'A' }
            ];;

            const result = UtilsHelper.orderBy(arrayTest, 'name', 'desc');
    
            expect(result).toEqual(arrayTextExpected);
        });
    })

    describe('testing sortArrayByObjectKey function', () => {
        test('should be show error when input in not array', () => {
            const dataText = 'Hello World'
            try {
                const result = UtilsHelper.sortArrayByObjectKey(dataText);
            } catch (error) {
                expect(error).toBe('input must is Array');
            }
        })

        test('should be show error when input is object', () => {
            const dataText = { cat: 'kitty' }
            try {
                const result = UtilsHelper.sortArrayByObjectKey(dataText);
            } catch (error) {
                expect(error).toBe('input must is Array');
            }
        })

        test('should be sort array by key', () => {
            const ObjectTest = [
                {A: { x: '5', y: '6' }},
                {C: { x: '5', y: '6' }},
                {D: { x: '5', y: '6' }},
                {E: { x: '5', y: '6' }},
                {B: { x: '5', y: '6' }}
            ]
    
            const objectExpected = [
                {A: { x: '5', y: '6' }},
                {B: { x: '5', y: '6' }},
                {C: { x: '5', y: '6' }},
                {D: { x: '5', y: '6' }},
                {E: { x: '5', y: '6' }}
            ]
    
            const result = UtilsHelper.sortArrayByObjectKey(ObjectTest);
            expect(result).toEqual(objectExpected);
        });

        test('shoulde be sort desc array by key', () => {
            const ObjectTest = [
                {A: { x: '5', y: '6' }},
                {C: { x: '5', y: '6' }},
                {D: { x: '5', y: '6' }},
                {E: { x: '5', y: '6' }},
                {B: { x: '5', y: '6' }}
            ]
    
            const objectExpected = [
                {E: { x: '5', y: '6' }},
                {D: { x: '5', y: '6' }},
                {C: { x: '5', y: '6' }},
                {B: { x: '5', y: '6' }},
                {A: { x: '5', y: '6' }}
            ]
    
            const result = UtilsHelper.sortArrayByObjectKey(ObjectTest, 'desc');
            expect(result).toEqual(objectExpected);
        })
    });

    describe('testing setDefaultValue function', () => {
        test('should be set value when arg one is null', () => {
            const dataTestArgOne = null;
            const dataTestArgTwo = 'hello world';

            const result = UtilsHelper.setDefaultValue(dataTestArgOne, dataTestArgTwo);
            expect(result).toBe(dataTestArgTwo);
        });

        test('should be set value when arg one is undefined', () => {
            const dataTestArgOne = undefined;
            const dataTestArgTwo = 'hello world';

            const result = UtilsHelper.setDefaultValue(dataTestArgOne, dataTestArgTwo);
            expect(result).toBe(dataTestArgTwo);
        });

        test('should be keep value when arg one has value', () => {
            const dataTestArgOne = 'my test';
            const dataTestArgTwo = 'hello world';

            const result = UtilsHelper.setDefaultValue(dataTestArgOne, dataTestArgTwo);
            expect(result).toBe(dataTestArgOne);
        });
        
    });


    describe('testing splitHalfArray function', () => {
        test('should be show error when input is not array', () => {
            const dataText = 'Hello World'
            try {
                const result = UtilsHelper.splitHalfArray(dataText);
            } catch (error) {
                expect(error).toBe('input must is Array');
            }
        });

        test('should be can split 2 array', () => {
            const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const arrayExpected = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];

            const result = UtilsHelper.splitHalfArray(arrayTest);
            expect(result).toEqual(arrayExpected);
        });

        test('should be can split 2 array and array is odd', () => {
            const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            const arrayExpected = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];

            const result = UtilsHelper.splitHalfArray(arrayTest);
            expect(result).toEqual(arrayExpected);
        });
    });

    describe('testing replaceString function', () => {
        test('show error when arg one is not string', () => {
            try {
                const dataTest = { message: 'buffalo is pink' };
                const stringReplaced = UtilsHelper.replaceString(dataTest, 'pink', 'black');
            } catch (error) {
                expect(error).toBe('input must string');
            }
        });

        test('show error when arg two is not string', () => {
            try {
                const dataTest = 'buffalo is pink';
                const stringReplaced = UtilsHelper.replaceString(dataTest, { test: 'test'}, 'black');
            } catch (error) {
                expect(error).toBe('input must string');
            }
        });

        test('show error when arg three is not string', () => {
            try {
                const dataTest = 'buffalo is pink';
                const stringReplaced = UtilsHelper.replaceString(dataTest, 'pink',  { test: 'test'});
            } catch (error) {
                expect(error).toBe('input must string');
            }
        });

        test('should be replace string', () => {
            const dataTest = 'buffalo is pink';
            const resultExpected = 'buffalo is black'
            const stringReplaced = UtilsHelper.replaceString(dataTest, 'pink',  'black');
            expect(stringReplaced).toBe(resultExpected);
        })

    });

    describe('testing isEmpty function', () => {
        test('should be return false when input has value', () => {
            const data = 'pink';
            const result = UtilsHelper.isEmpty(data);
            expect(result).toBe(false);
        });

        test('should be return true when input has null', () => {
            const data = null;
            const result = UtilsHelper.isEmpty(data);
            expect(result).toBe(true);
        });

        test('should be return true when input has undefinded', () => {
            const data = undefined;
            const result = UtilsHelper.isEmpty(data);
            expect(result).toBe(true);
        });

        test('should be return true when input has empty array', () => {
            const data = [];
            const result = UtilsHelper.isEmpty(data);
            expect(result).toBe(true);
        });

        test('should be return true when input has empty object', () => {
            const data = {};
            const result = UtilsHelper.isEmpty(data);
            expect(result).toBe(true);
        });
    });

    describe('testing filterByMinMax function', () => {
        test('should be show error when input is not array', () => {
            const data = 'tester';
            try {
                const result = UtilsHelper.filterByMinMax(data, 7, 8);
            } catch (error) {
                expect(error).toBe('input must is Array');
            }
        });

        test('should be fillter when min max', () => {
            const data = [1,2,3,4,5,6,7,8,9];
            const min = 2;
            const max = 8;

            const resultExpected = [2,3,4,5,6,7,8];
            const result = UtilsHelper.filterByMinMax(data, min, max);
            expect(result).toEqual(resultExpected);
        });
    });

    describe('testing orderBy function', () => {
        test('should be sort by asc when input is array', () => {
            const data = ['Ant', 'Banana', 'Dog', 'Cat'];

            const resultExpected = ['Ant', 'Banana', 'Cat', 'Dog'];
            const result = UtilsHelper.orderBy(data);
            expect(result).toEqual(resultExpected);
        });

        test('should be sort by desc when input is array', () => {
            const data = ['Ant', 'Banana', 'Dog', 'Cat'];

            const resultExpected = ['Dog', 'Cat', 'Banana', 'Ant'];
            const result = UtilsHelper.orderBy(data, null, 'desc');
            expect(result).toEqual(resultExpected);
        });

        test('should be sort by asc when input is array object', () => {
            const data = [
                { name: 'bob' },
                { name: 'anna' },
                { name: 'sora' }
            ];

            const resultExpected = [
                { name: 'anna' },
                { name: 'bob' },
                { name: 'sora' }
            ];

            const result = UtilsHelper.orderBy(data, 'name');
            expect(result).toEqual(resultExpected);
        });

        test('should be sort by desc when input is array object', () => {
            const data = [
                { name: 'bob' },
                { name: 'anna' },
                { name: 'sora' }
            ];

            const resultExpected = [
                { name: 'sora' },
                { name: 'bob' },
                { name: 'anna' },
            ];
            
            const result = UtilsHelper.orderBy(data, 'name', 'desc');
            expect(result).toEqual(resultExpected);
        });
    });


    describe('testing union function', () => {
        test('should be groupby when input is array', () => {
            const array1 = [2];
            const array2 = [2, 1];

            const resultExpected = [2, 1];

            const result = UtilsHelper.union(array1, array2);
            expect(result).toEqual(resultExpected);
        });

        test('should be error when input is not array', () => {
            const data1 = [1,2];
            const data2 = 'string';
            try {
                const result = UtilsHelper.union(data1, data2);
            } catch (error) {
                expect(error).toBe('input must is Array');
            }
        })

        test('should be error when input is not permetive type', () => {
            const data1 = [{ name: 'name'}];
            const data2 = ['string'];
            try {
                const result = UtilsHelper.union(data1, data2);
            } catch (error) {
                expect(error).toBe('input must permetive type');
            }
        })

        // test('should be groupby when input is array object', () => {
        //     // lodash - uinion support only permitive type
        //     const array1 = [
        //         { name: 'peter' },
        //         { name: 'john' },
        //         { name: 'stephen' }
        //     ];

        //     const array2 = [
        //         { name: 'andrew' },
        //         { name: 'matthew' },
        //         { name: 'peter' }
        //     ];

        //     const resultExpected = [
        //         { name: 'peter' },
        //         { name: 'john' },
        //         { name: 'stephen' },
        //         { name: 'andrew' },
        //         { name: 'matthew' }
        //     ];

        //     const result = UtilsHelper.union(array1, array2);
        //     expect(result).toEqual(resultExpected);
        // })
    })
})