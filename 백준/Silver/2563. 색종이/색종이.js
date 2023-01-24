var inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var n = inputData.shift(); //색종이 수
var paper = new Array(101).fill().map(()=>new Array(101).fill(false));  //101*101배열 생성 => [1][1]~[100][100] 배열 사용

for(var i=0; i<n; i++){
    var [w, h] =  inputData.shift().split(' ').map(Number); // 가로, 세로
    for(var j=w; j<w+10; j++){
        for(var k=h; k<h+10; k++){
            paper[j][k] = true; //true로 칠해놓기 
        } 
    }
}

var result = new Array();
for(var i=0; i<paper.length; i++){
    result.push(...paper[i].filter(e => e==true));
}

console.log(result.length);
