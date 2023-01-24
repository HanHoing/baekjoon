var filepath = (process.platform == 'win32')?__dirname+'/test.txt':'/dev/stdin';
var input = require('fs').readFileSync(filepath).toString();

var num = 2;
while (input != 1) {
    if(input % num == 0){
        input /= num;
        console.log(num);
    }else num++;
    
}