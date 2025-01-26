import { add, returnStrLength, transformToNumber } from "./math";
import { it, expect } from "vitest";


// it('it should throw an error if no arguments are passed', () => {
//     // Test code here
//     const resultFunc = () => {
//         add()
//     }
//     expect(resultFunc).toThrow()
// });


// it('it should throw an error if multiple arguments are provided', () => {
//     // Test code here
//     const resultFunc = () => {
//         add(1, 2)
//     }
//     expect(resultFunc).toThrow(/is not iterable/i)
// });

// it('should return strings length', () => {
//     const result = returnStrLength('Hello World!')
//     expect(result).toBe(12)
// })

it('should return sum of numbers', () => {
    const result = add([1, 2, 3, 4])
    expect(result).toBe(10)
})
