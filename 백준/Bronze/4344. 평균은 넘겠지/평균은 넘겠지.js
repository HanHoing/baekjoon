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