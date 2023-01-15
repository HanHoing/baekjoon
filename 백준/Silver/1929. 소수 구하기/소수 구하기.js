var inputData = require('fs').readFileSync('/dev/stdin').toString().split(' ');
inputData = [...inputData.map(e=>+e)];  

var M = inputData[0];
var N = inputData[1];
var aqrt;

function func(i) {
    aqrt = Math.sqrt(i);
    for(var j=3; j<=aqrt; j++)
        if( i % j == 0 ) return false;
    console.log(i);
}

if(M==1) M=2;  
if(M==2) console.log(M); 
if(M%2==0) M++;

for(var i=M; i<=N; i=i+2) func(i);
