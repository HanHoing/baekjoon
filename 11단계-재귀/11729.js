var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split(' ').map(Number);

var result="";

hanoi(inputData[0], 1, 2, 3);

function hanoi(N, str, mid, to) {

   if(N==1) {
    result+=str+' '+to+'\n';
     return; 
   }

    //A->B N-1
    hanoi(N-1, str, to, mid); //1

    //A->C 1개
    result+=str+' '+to+'\n';

    hanoi(N-1, mid, str, to); //2
}

console.log(Math.pow(2,inputData[0])-1);
console.log(result);