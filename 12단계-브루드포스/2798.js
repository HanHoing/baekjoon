var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var data = require('fs').readFileSync(filepath).toString().split('\n');

console.log(data);