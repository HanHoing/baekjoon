var filepath = (process.platform == 'win32')?__dirname+'/test.txt':'/dev/stdin';
var data = require('fs').readFileSync(filepath).toString().split('\n');

/* 방법2 max, indexOf, */
//1. 1차원 배열 생성 
var arr = new Array();
for(var i=0; i<data.length; i++)
    arr.push(...data[i].split(' ').map(e=>+e));  //... : 배열에서 꺼내서 넣기 
    
//2. max함수로 구하기
var max = Math.max(...arr); 
console.log(max);

//3. indexof로 인덱스 구하기 
var index = arr.indexOf(max);  
console.log(Math.floor(index/9+1) + " " + (index%9+1)); //행=index/9,열=index%9




/* 방법1 하나씩 다 비교 */
var max = 0; 
var row=1, col=1; //행, 열

//1. 2차원 배열 생성 
var arr = new Array();
for(var i=0; i<data.length; i++)
    arr.push(data[i].split(' ').map(Number));

//2. 정공법,,,
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