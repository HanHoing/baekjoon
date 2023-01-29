var filepath = (process.platform =='win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');

var n = inputData.shift(); //색종이 수

// var paper = new Array(101).fill(new Array(101).fill(false)); 
var paper = new Array(21).fill().map(()=>new Array(21).fill(false));  //101*101배열 생성 => [1][1]~[100][100] 배열 사용

var cnt=0;
//종이 면적만큼 true로  
for(var i=0; i<n; i++){
    var [w, h] =  inputData.shift().split(' ').map(Number); // 가로, 세로 하나씩 빼서 사용
    for(var j=w; j<w+10; j++){ //1~10
        for(var k=h; k<h+10; k++){ //1~10
            if(paper[j][k]!=true) cnt++;   //기존에 false였다면 새로운 면임 => cnt++
            paper[j][k] = true;            //true로 칠해놓기 
        } 
    }
}
/*방법 1: 칠하면서 카운트하기 (160ms) */
console.log(paper); 

/*방법 2: true개수 세기 (120ms)  ==> 더 빠름*/
var result = new Array(); 
for(var i=0; i<paper.length; i++){
    result.push(...paper[i].filter(e => e==true));  
    //테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
    //result = [true, true, ... , true]
}
console.log("방법2: "+result.length);
