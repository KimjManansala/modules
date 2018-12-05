const arrayOfThings = require('./array.js')

const printArrays = (res) =>{
    console.log(res)
}

const loopThrough = () => {
    arrayOfThings.forEach(printArrays)
}
loopThrough()


