filepath = (process.platform ==='win32')?__dirname+'/test.txt':'/dev/stdin';
var data = require('fs').readFileSync(filepath).toString().split(' ').map(Number).shift();

var result=0;
var cnt=0;

while(cnt!=data){
    result++;
    if(result.toString().indexOf('666')!=-1) cnt++;
}

console.log(data, cnt, result);

/**
 * 666
 * 1666
 * 2666
 * 3666
 * 4666
 * 5666
 * 7666
 * 8666
 * 9666
 * 10666
 */