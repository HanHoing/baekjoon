var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');
inputData = [...inputData.map(e=>+e)];  

let all = inputData.shift();
for(let a=0; a<all; a++){
    let people = new Array();
    let tmp;
    let sum;

    let floor = inputData[2*a];      //층
    let unit = inputData[2*a+1];     //호
    
    for(let i=1; i<=unit; i++)
        people.push(i);             //0층 세팅 

    for(let i=0; i<floor; i++){     //층 수만큼 반복
        tmp = new Array(); 
        sum=0;
        for(let j=0; j<unit; j++){     //호 수만큼 반복
                sum += people[j];
                tmp.push( sum );
        }
        people = [...tmp];
    }
    console.log(people[people.length-1]);
}
