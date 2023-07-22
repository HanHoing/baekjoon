var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split(' ').map(Number);


var result = 0;
var num = inputData[0]; //5
var cnt = 1; //
//0 1 1 2 3 5
pb(0, 1); //재귀함수 호출

function pb(a, b) { 
    if(num == cnt) { 
        console.log(b);
        return;
    }
    cnt++;  //5
    result = a + b; // 3 5 3 =5
    pb(b, result); //3 5
}



// var a = 1;
// var b = 0;

//0 1 1 2 3 5  => result = a+b
//1 = 0 + 1
//2 = 1 + 1
//3 = 1 + 2
//5 = 2 + 3
 //   a <= b
 //   b <= result;
