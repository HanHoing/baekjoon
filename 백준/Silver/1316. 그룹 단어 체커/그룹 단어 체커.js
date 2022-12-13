const inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let inSize = Number(inputData.shift());
let yGroup = inSize;
let a;

for(let i=0; i <inSize; i++){         
    a = inputData[i].replace('\r','').split(''); //개행제거

    if(a.length > 2){ 
        for(let j=1; j < a.length; j++){
            let b = a.indexOf(a[j]);   
            if((j-b > 1) && (a[j]!=a[j-1])){ 
                yGroup--;
                break;
            }
        }
    }
}

console.log(yGroup);