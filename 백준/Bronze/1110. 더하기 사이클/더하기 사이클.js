const filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
const inputData = require('fs').readFileSync(filepath).toString().split('\n');
var a = inputData[0];
var tmp = a;
var cnt = 0;

do{
    tmp = parseInt(''+(tmp%10)+((tmp/10+tmp%10)%10));
    cnt++;
} while (a!=tmp);

console.log(cnt);