let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

inputData.shift();
var result = inputData.sort((a,b)=> a-b).join('\n');
console.log(result);