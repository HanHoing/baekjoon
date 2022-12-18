var inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let result = 0;

let main = ((a)=>{
    
    a = a.toString().split('');     

    if(a.length < 3) return true;      

    for(let i=0; i<a.length-2; i++)   
        if( a[i+2] != 2*a[i+1]-a[i]) return false;  
   
    return true;                     
});


for(let a=1; a<=inputData[0]; a++){    
    if(main(a)) result++;              
}

console.log(result);
