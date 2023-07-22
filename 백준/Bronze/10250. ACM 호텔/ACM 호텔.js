var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');

var num = inputData.shift();

for(var i=0; i<num; i++){
    var acm = inputData[i].split(' ').map(Number);
    var H = acm[0];
    var W = acm[1];
    var N = acm[2];

    if(H>=N) {
        console.log(100*N+1);
        continue;
    }

    var floor = (N%H == 0)? H : N % H; //N이 최상층일 때 
    var unit =  Math.ceil(N / H);
   
    console.log(100*floor+unit);
}



