import { it, expect } from 'vitest'
import { add, even } from './math'

it('should return the correct sum if an array of number is provided', () => {
    // Arrange
    const numbers = [1, 2, 3]

    // Action
    const result = add(numbers)

    // Assertion
    expect(result).toBe(6)
})

// Test case for Filter Even Numbers:
it('should return the even numbers only from an array of number', () => {
    const result = even([22, 5, 33, 100])
    expect(result).toStrictEqual([22, 100])
})