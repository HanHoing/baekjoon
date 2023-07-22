var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().trim().split('\n');
//N개 수가 주어졌을때 오름차순 정렬
inputData.shift();
var result = inputData.sort((a,b)=> a-b).join('\n');
console.log(result); 
