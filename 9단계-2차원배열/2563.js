var filepath = (process.platform =='win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');

var n = inputData.shift(); //색종이 수
//정리 할 것: fill, map 등등 -> 2차원 배열 생성법 다시 정리해놓기 
// var paper = new Array(101).fill(new Array(101).fill(false));  //101*101배열 생성 => [1][1]~[100][100] 배열 사용
var paper = new Array(101).fill().map(()=>new Array(101).fill(false));  //101*101배열 생성 => [1][1]~[100][100] 배열 사용

var cnt=0;
//종이 면적만큼 true로  
for(var i=0; i<n; i++){
    var [w, h] =  inputData.shift().split(' ').map(Number); // 가로, 세로 하나씩 빼서 사용
    for(var j=w; j<w+10; j++){
        for(var k=h; k<h+10; k++){
            if(paper[j][k]!=true) cnt++;   //기존에 false였다면 새로운 면임 => cnt++
            paper[j][k] = true; //true로 칠해놓기 
        } 
    }
}
/*방법 1: 칠하면서 카운트하기 (160ms) */
console.log(cnt); 

/*방법 2: true개수 세기 (120ms)  ==> 더 빠름*/
var result = new Array(); 
for(var i=0; i<paper.length; i++){
    result.push(...paper[i].filter(e => e==true));
}
console.log(result.length);



