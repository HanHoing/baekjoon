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


/*더하기 전 가장 오른쪽자리 + 더한 후 가장 오른쪽자리
 Ex)input(26) 문자열로 변경 + 6 + (2+6)%10 = '6' + '8' = 68 */ 
//do-while : https://webclub.tistory.com/166