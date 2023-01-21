var filepath = (process.platform == 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');
var NM = inputData.shift().split(' '); //NM[0]=행, NM[1]=열
var N = parseInt(NM.shift());
var M = parseInt(NM.shift());



var A = new Array();
var B = new Array();
var sum = '';

for(var i=0; i<N; i++){
        A[i] = inputData[i].split(' ').map(e=>+e); 
        B[i] = inputData[i+N].split(' ').map(e=>+e); 
        for(var j=0; j<M; j++){
            sum += parseInt(A[i][j]+B[i][j]) +' ';
        }
       if(i!=N-1) sum+='\n'
}

console.log(sum);