var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var data = require('fs').readFileSync(filepath).toString().split('\n');
var [N, M] = data.shift().split(' ').map(Number); //N=행, M=열

var tmp = data.slice(0, N);
var S = data.slice(N);

var result = tmp.filter((a, i) =>{
    console.log(a);
    return S.indexOf(a) != -1;
}).length;

console.log(result);
