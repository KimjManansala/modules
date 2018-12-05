
// module.exports = console.log('This is a console.log() statement in file3.js')

var file1 = require('./file1')
require('./file2')

file1.f1();
file1.f2();
file1.f3();

console.log('This is a console.log() statement in file3.js')