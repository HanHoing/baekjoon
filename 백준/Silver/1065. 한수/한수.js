//한수 개수 구하기 
//등차수열이란? 공차가 같은것
var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');

var a = inputData[0];
let result = 0;
let b; 

let main = ((b)=>{
    for(let j=0; j<b.length-2; j++){
        if( b[j+2] != 2*b[j+1]-b[j])
            return false;
    }
    return true;
});


for(let i=1; i<=a; i++){
    
    if(i < 100) {
     result++
     continue;
    }
    b = i.toString().split('');
      
    if(main(b)) result++;
}

console.log(result);
