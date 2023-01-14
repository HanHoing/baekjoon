var inputData = require('fs').readFileSync('/dev/stdin').toString().split(' ');
inputData = [...inputData.map(e=>+e)]; 

var A = inputData[0]; 
var B = inputData[1];
var V = inputData[2];

var day = 0; 

day = (V-B)/(A-B);
console.log(Math.ceil(day));