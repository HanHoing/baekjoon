var inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var num = Number(inputData.shift());
var arr = [];
for(var i=0; i<num; i++){
    arr.push(inputData[i].split(" ").map(Number))
}

arr.sort((a, b)=>{
    if (a[0]==b[0]){
        return a[1] -b[1]
    } else {
        return a[0]-b[0]
    }
})

var result ="";
arr.forEach((e)=>{
    result += e[0]+" "+e[1]+"\n";
})

console.log(result.substring(0, result.length -1)); 