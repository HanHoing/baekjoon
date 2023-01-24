var input = require('fs').readFileSync('/dev/stdin').toString();

var num = 2;
while (input != 1) {
    if(input % num == 0){
        input /= num;
        console.log(num);
    }else num++;  
}