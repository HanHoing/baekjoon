const { toASCII } = require('punycode');

var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().trim().split('\n');
/**
 * 알파벳 소문자로 N개 단어를 아래와 같은 조건에 따라 정렬
1. 길이가 짧은 것부터
2. 길이가 같으면 사전 순으로
-  단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.
 */

inputData.sort();
inputData.sort((a,b)=>{
    if(a.length!=b.length)
         return a.length-b.length;
});


let result = new Set(inputData);  //set사용하여 중복 문자 제거
result.forEach