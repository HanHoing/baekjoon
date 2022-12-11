const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input = [];
var result = 0;

rl.on("line", (line) => {
        input = line.split(' ').map(el => parseInt(el));
        rl.close();
    });

rl.on("close", () => {
    const [a, b, c] = [input[0], input[1], input[2]];
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

	process.exit();
});