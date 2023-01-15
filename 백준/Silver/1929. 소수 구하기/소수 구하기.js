var inputData = require('fs').readFileSync('/dev/stdin').toString().split(' ');

var M = parseInt(inputData[0]);
var N = parseInt(inputData[1]);
var aqrt;

function func(i) {
    aqrt = Math.sqrt(i);
    for(var j=2; j<=aqrt; j++)
        if( i % j == 0 ) return false;
    console.log(i);
}

if(M==1) M=2;
for(var i=M; i<=N; i++){
   func(i)
};