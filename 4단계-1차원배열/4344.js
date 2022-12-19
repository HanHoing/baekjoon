const inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(var i=1; i<=inputData[0]; i++ ){
    let cnt = 0;
    let a = inputData[i].split(' ');
    let b = a.shift(); 

    let avg = a.reduce((acc, cur)=>{
        return (acc+parseInt(cur));
    }, 0)/b;

    a.forEach((val)=>{if (val>avg) cnt++;}) 
    
    console.log((cnt/b*100).toFixed(3)+'%');
}

//함수
/*  a.shift() : a배열에서 맨 앞 원소 제거 후, 제거한 원소 return
    a.reduce((acc, cur)=>{ return acc+cur }) : a배열 원소들의 합계 더하기 -> (누적값, 현재값)
    a.forEach((val)=>{}) : a배열 원소 수만큼 for문 
    toFixed(3) : 소수점 세번째 자리에서 반올림 */