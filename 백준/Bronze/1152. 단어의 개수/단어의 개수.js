var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().trim().split(' ');

var len = inputData.length;
if(inputData[0]=='') len--;

console.log(len);