var inputData = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

var cnt = 0;
var result = 0;
var num = inputData[0];

pb(0, 1); //재귀함수 호출

function pb(a, b) {
    if(num == cnt) {
        console.log(a);
        return;
    }
    cnt++;
    result = a + b; 
    pb(b, result);
}