var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');
//10250 ACM호텔
//input: H, W, 몇번째손님
//output: 배정되어야하는 방 번호
/*
6 x 12
1 -> 101 1,1
2 -> 201 2,1
3 -> 301 3,1
4 -> 401 
5 -> 501 
6 -> 601
7 -> 102  1,2
8 -> 202

1*2
1 -> 101
2 -> 102
*/
var num = inputData.shift();

for(var i=0; i<num; i++){
    var acm = inputData[i].split(' ').map(Number);
    var H = acm[0];
    var W = acm[1];
    var N = acm[2];

    //층이 하나일 때
    if(H>=N) {
        console.log(100*N+1);
        continue;
    }

    var floor = (N%H == 0)? H : N % H; //N이 최상층일 때 
    var unit =  Math.ceil(N / H);
   
    console.log(100*floor+unit);
}



