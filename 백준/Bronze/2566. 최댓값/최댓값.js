var filepath = (process.platform == 'win32')?__dirname+'/test.txt':'/dev/stdin';
var data = require('fs').readFileSync(filepath).toString().split('\n');

var max = 0; 
var row=1, col=1; 

var arr = new Array();
for(var i=0; i<data.length; i++)
    arr.push(data[i].split(' ').map(Number));

arr.forEach((val, i)=>{
    arr[i].forEach((val, j) => {
        if(val > max){
            max = val; 
            row = i+1;
            col = j+1;
        }
    });
});

console.log(max);
console.log(row+' '+col);