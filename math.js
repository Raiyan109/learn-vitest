export function add(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum
}

// Filter Even Numbers:
export function even(arr) {
    const newArr = arr.filter((elem) => elem % 2 == 0)
    return newArr
}


export const returnStrLength = (str) => {
    return str.length
}

