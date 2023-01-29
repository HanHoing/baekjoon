var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');

//방법2 내장함수 sort사용 -> 12회
var num = Number(inputData.shift());
var arr = [];
for(var i=0; i<num; i++){
    arr.push(inputData[i].split(" ").map(Number))
}
var cnt=0;

console.log(arr);

var result ="";
//2차원 배열 정렬 
arr.sort((a, b)=>{
    if (a[0]==b[0]){
        cnt++;
        return a[1] -b[1]
    } else {
        cnt++;
        return a[0]-b[0]
    }
}).forEach((e)=>{
    result += e[0]+" "+e[1]+"\n";
})


console.log(result.substring(0, result.length -1)); //마지막 개행 제거
console.log(cnt);

//방법1 -> 버블정렬 
/*
var num = Number(inputData.shift());
var arr = [];
for(var i=0; i<num; i++){
    arr.push(inputData[i].split(" ").map(Number))
}
var cnt=0;
for(var i=0; i<num; i++){
    var tmp = null;
    for(var j=0; j< num-1-i; j++){
        cnt++;
        if(arr[j][0] > arr[j+1][0] || (arr[j][0] == arr[j+1][0] && arr[j][1] > arr[j+1][1])){
            tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        } 
    }
    if(tmp==null)break;
}

var result = "";
arr.forEach((val, i)=>{
    result += val[0]+" "+val[1];
    if(i!=arr.length-1) result += "\n";
});

console.log(result);
console.log(cnt);
*/

