var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');
let result = 0;

//Main   a= 123
for(let a=1; a<=inputData[0]; a++){     //1 ~ inputdata까지 반복 
    if(func(a)) result++;               //등차수열이 맞다면 result++ 
}
console.log(result);



/**등차수열 검사 함수 선언*/
function func(a) {          //a = 123   
    a = a.toString().split('');       //''기준 잘라서 배열 넣기  Ex)123-> a=[1,2,3]  124

    if(a.length < 3) return true;      //세자릿수 미만이면 TRUE return

    for(let i=0; i<a.length-2; i++)     //i=0   a[2]-a[1]  == a[1] -a[0]   ->4-2 != 2-1  ==> 
        if( a[i+2] != 2*a[i+1]-a[i])    //a[j+2]-a[j+1] == a[j+1]-a[j]
            return false;               //비교하다가 하나라도 틀리면 FALSE return
   
    return true;                        //모든 자리수를 비교 완료 했으면 TRUE return              
}




