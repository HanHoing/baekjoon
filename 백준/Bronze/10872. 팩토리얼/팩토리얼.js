var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split(' ').map(Number);

var result=1;
if(inputData==0) inputData=1;
func(inputData);



function func(num) {
    if(num==1) {
        console.log(result)
        return;
    }

    result *= num;
    func(num-1);
}
