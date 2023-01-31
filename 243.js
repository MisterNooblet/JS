arr = ['hellooooo', 'why', 'how']


Array.prototype.myFilter = function (cb) { //calling this prototype method with our callback function (cb)
    let result = [] // creating an array to display our result array as intended in filter method

    this.forEach((element, idx, arr) => { //looping through the provided array we executed the method on with the help of the word *this*
        if (cb(element, idx, arr)) { //checking if the condition we provided in our callback function is true
            result.push(element) // if it is , we push the current iteration element to the result array
        }
    })
    return result // after our loop has finished we return the result array.

}

console.log(arr.myFilter(word => arr.indexOf(word) > 0));

Array.prototype.myFind = function (cb) { //calling this prototype method with our callback function (cb)
    let result // creating our result variable (undefined by default) to return the element we found
    this.forEach((element, idx, arr) => { // looping through the given array , with the help of *this*(refers to the array we executed the method on)
        if (cb(element, idx, arr) && result == undefined) { // checks if the condition given by the callback function is met and if result is undefined
            result = element //if it is true set result to current iterations element
        }
    })
    return result // return result (if no codition was true returns undefined as intended)
}


console.log(arr.myFind(word => word.length === 3));


