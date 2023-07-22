var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().trim().split('\n');
//y좌표asc, x좌표asc

var num = Number(inputData.shift());
var arr ;
(arr=[]).length = num;
for(var i=0; i<num; i++){
    arr[i] = inputData[i].split(' ').map(Number);
}

var result = "";
arr.sort((a, b)=>{
    if(a[1]==b[1])
        return a[0]-b[0];
    else
        return a[1]-b[1];
}).forEach((val)=>{
    result +=  val[0] + ' ' + val[1] +'\n';
})


console.log(result);
