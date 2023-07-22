var data = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number).shift();

var result=0;
var cnt=0;

while(cnt != data){
    result++;
    if(result.toString().indexOf('666')!=-1) cnt++;
}

console.log(result);