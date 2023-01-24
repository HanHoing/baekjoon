var data = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var arr = new Array();
for(var i=0; i<data.length; i++)
    arr.push(...data[i].split(' ').map(e=>+e));  //... : 배열에서 꺼내서 넣기 

var max = Math.max(...arr); 
console.log(max);

var index = arr.indexOf(max);  
console.log(Math.floor(index/9+1) + " " + (index%9+1)); //행, 열