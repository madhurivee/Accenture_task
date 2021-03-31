/**
 * Task 1
    Code snippet:
    1.	let arr = [1, 2, 3, 4];
    To -do:
        1) Print the elements of arr in the console
    2) Create a new array arr2 with the values of arr doubled i.e[2, 4, 6, 8]
    3) Create a new array arr3 containing only values from arr which are even i.e. [2, 4]
*/

const printNumbers = (arr) => {
    // Print the elements of arr in the console
    arr.forEach((number) => console.log(number))

    // Create a new array arr2 with the values of arr doubled i.e[2, 4, 6, 8]
    const arr2 = arr.map((number) => {return number * 2} )
    console.log(arr2)

    // Create a new array arr3 containing only values from arr which are even i.e. [2, 4]
    const arr3 = arr.filter((number) => number % 2 === 0)
    console.log(arr3)
}
const arr = [1, 2, 3, 4]
printNumbers(arr)