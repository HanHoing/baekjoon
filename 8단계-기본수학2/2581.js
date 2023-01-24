var filepath = (process.platform == 'win32')?__dirname+'/test.txt':'/dev/stdin';
var input = require('fs').readFileSync(filepath).toString().split('\n');
input = [...input.map(e=>+e)];  //string->number형변환
var M = input[0];
var N = input[1];
var arr = new Array();

function func(i) {
    for(var j=2; j<i; j++){
        if(i%j==0) return false;
    }
    arr.push(i);
}

for(var i=M; i<=N; i++){
    func(i);
}

console.log(arr);