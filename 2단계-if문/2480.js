//JavaScript(fs)
const input = require('fs').readFileSync(__dirname+'/test.txt').toString().split(' ');

const [a, b, c] = [input[0], input[1], input[2]];
var result;

if(a==b && b==c){
    result = 10000+a*1000;
}else if(a==b || a==c){
    result = 1000+a*100;
}else if(b==c){
    result = 1000+b*100;
}else{
    result = Math.max(a,b,c)*100;
}

console.log(result);

//Python