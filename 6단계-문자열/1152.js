var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().trim().split(' ');

var len = inputData.length;
if(inputData[0]=='') len--;

console.log(len);

/**
 * 
 * 밑처럼 제출시  inputData==null일 때 -1이 되어서 틀림,,
 * 이유가,,, 있다,,
var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split(' ');

var len = inputData.length;

if(inputData[len-1]=='') len--;
if(inputData[0]=='') len--;

console.log(len);

 */