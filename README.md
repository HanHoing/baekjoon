# baekjoon
This is a auto push repository for Baekjoon Online Judge created with [BaekjoonHub](https://github.com/BaekjoonHub/BaekjoonHub).


# javascript 
- fs
    <test.js>
    const input = require('fs').readFileSync(__dirname+'/test.txt').toString().split(' '); //제출시('dev/stdin') 경로 변경
    const [a, b, c] = [input[0], input[1], input[2]];
    <test.txt>
    입력값1 입력값2 입력값3
    
    실행: Run Code(Ctrl+Alt+N)

- readline
    <test.js>
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    var input = [];
    rl.on("line", (line) => {
        /*입력받는 값을 처리*/
        input = line.split(' ').map(el => parseInt(el));
        rl.close();
    });
    rl.on("close", () => {
        /*입력이 끝나고 실행*/
        process.exit();
    });

     실행: node js파일명