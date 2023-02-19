var data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
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