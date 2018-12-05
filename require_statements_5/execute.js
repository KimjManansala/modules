


let randomVal = require('./randomValue.js')
let dog = require('./dog.js')
let cat = require('./cat.js')


const displayCatOrDog = (dog, cat) => {
    return randomVal(dog,cat)
}

console.log(displayCatOrDog(dog, cat))
