var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');

//SIZE = 6
var inSize = Number(inputData.shift());                     //전체 input case 수 (shift로 리턴)
var yGroup = inSize;                                        //그룹문자 cnt용으로 초기값은 전체 input case 수                   
//6

for(var i=0; i <inSize; i++){         
    var a = inputData[i].replace('\r','').split('');        //개행제거 후 ''기준으로 배열에 담기 
    //a = [a,b,c,b,c]
    if(a.length > 2){                                       //조건 1
        for(var j=1; j < a.length; j++){                    //조건 3 아웃바운드 오류로 인덱스 1부터 시작  => 조건2로 걸러짐
            if((j-a.indexOf(a[j]) > 1) && (a[j]!=a[j-1])){  //(조건2 && 조건3)
                yGroup--;                                   //그룹문자가 아니라면 1 감소
                break;                                      //그룹문자가 아닌걸로 판별되어 반복문 빠져나감
            }
        }
    }
}

console.log(yGroup);


/* 그룹단어가 아닌 조건
1. 두글자가 아니어야함 (두 글자는 무조건 그룹단어임)
    -> a,b,ab,aa,bb 등등 
2. 기준값(j) 위치-기준값이 제일 처음 있는 위치가 > 1 (바로 왼쪽값이 아니어야함)
     -> aba 판별 가능 
         기준값 위치가 '2' 일 때,  첫 'a'가 있는 위치는'0' //2-0=2로 그룹함수X
    -> But) aaa 판별 불가  
        기준값 위치가 '2' 일 때,  첫 'a'가 있는 위치는'0' //2-0=2이지만 그룹함수O
3. 기준값(j)바로 앞에 해당 값이 없어야함  
    -> aaa 판별 가능 
        기준값 위치가 '2' 일 때, 바로 앞의 값이 a로 같음
    -> But) aba 판별 불가 
         바로 앞의 값들이 모두 다르지만 그룹문자X
*/

/*
참고 
https://thiago6.tistory.com/209
https://hianna.tistory.com/489

*/ 