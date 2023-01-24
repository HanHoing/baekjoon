var filepath = (process.platform == 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split(' ');
inputData = [...inputData.map(e=>+e)];  //string->number형변환

var M = inputData[0];
var N = inputData[1];
var sqrt;

function func(i) {
    sqrt = Math.sqrt(i);
    for(var j=3; j<=sqrt; j++)
        if( i % j == 0 ) return false;
    console.log(i);
}

if(M==1 ||M==2) { //1은 소수가 아님, 2는 짝수 중 유일한 소수
    M=3;
    console.log(M); 
}
if(M%2==0) M++;          //M이 짝수로 시작한다면 홀수로 시작하도록 세팅

//1, 2, 짝수가 아닌 수 검사
for(var i=M; i<=N; i=i+2){
   func(i);
}