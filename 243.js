arr = ['hellooooo', 'why', 'how']
Array.prototype.myFilter = function (cb) {
    let result = []

    this.forEach((element, idx, arr) => {
        if (cb(element, idx, arr)) {
            result.push(element)
        }
    })
    return result

}

console.log(arr.myFilter(word => arr.indexOf(word) > 0));

Array.prototype.myFind = function (cb) {
    let result
    this.forEach((element, idx, arr) => {
        if (cb(element, idx, arr) && result == undefined) {
            result = element
        }
    })
    return result
}
console.log(arr.myFind(word => word.length === 3));


