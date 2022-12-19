var inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var inSize = Number(inputData.shift());
var yGroup = inSize;

for(var i=0; i <inSize; i++){         
    var a = inputData[i].replace('\r','').split(''); 

    if(a.length > 2){ 
        for(var j=1; j < a.length; j++){
            if((j- a.indexOf(a[j]) > 1) && (a[j]!=a[j-1])){ 
                yGroup--;
                break;
            }
        }
    }
}
console.log(yGroup);