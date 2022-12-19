var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');
let result = 0;

let func = ((a)=>{   
    a = a.toString().split('');        //''기준 한자리수씩 가져오기  

    if(a.length < 3) return true;      //세자릿수 미만이면 true 

    for(let i=0; i<a.length-2; i++) 
        if( a[i+2] != 2*a[i+1]-a[i])    //a[j+2]-a[j+1] == a[j+1]-a[j]
            return false;               //비교하다가 하나라도 틀리면 false return
   
    return true;                        //모든 자리수를 비교 완료 했으면 true return              
});

for(let a=1; a<=inputData[0]; a++){     //1 ~ inputdata까지 반복 
    if(func(a)) result++;               //등차수열이라면 result++ 
}

console.log(result);
