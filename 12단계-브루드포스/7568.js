var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var data = require('fs').readFileSync(filepath).toString().split('\n');
var num = data.shift();

var arr;
(arr = []).length = num;
for(var i=0; i<num; i++){
    arr[i] = data[i].split(' ').map(Number)
}

var rank=0;
var result="";

arr.forEach((a, i)=>{
    rank=1; //가장 첫 등수부터 시작

    arr.forEach((b, j)=>{
        if(i!=j)
        if( a[0] < b[0] && a[1] < b[1] ){ 
            rank++;
        } 
    })
    result += rank+" ";
})

console.log(result);

/**
* 몸무게 or 키가 같은 조건 -> 문제에서 따지지 않았음 
* 무조건 몸무게, 키 모두 커야 덩치라고 판별
 */