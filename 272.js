// Instructions
// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
//     will sort the words in alphabetical order.If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a.then, .catch.
const str1 = 'abcdefghijklmnopqrstuvwxyz'
const arrTruthy = str1.split('')
const arrFalsy = str1.split('')
arrFalsy.push(true, false, null, undefined, NaN)

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(element => { return typeof element === 'string'; })) {
            let result = arr.reduce((a, b) => {
                a.push(b.toUpperCase())
                return a
            }, [])
            resolve(result)
        }

        reject({ status: 'array is not of pure strings , operation failed' })
    })
}


makeAllCaps(arrFalsy)
    .then((result) => {
        return new Promise((resolve, reject) => {
            let response = result.sort().reverse()
            resolve(response)
        })
    })
    .then((response) => {
        console.log(response);
    })
    .catch((rep) => {
        console.log(rep.status);
    })



makeAllCaps(arrTruthy)
    .then((result) => {
        return new Promise((resolve, reject) => {
            let response = result.sort().reverse()
            resolve(response)
        })
    })
    .then((response) => {
        console.log(response);
    })
    .catch((rep) => {
        console.log(rep.status);
    })

