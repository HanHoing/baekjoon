var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split('\n');
inputData = [...inputData.map(e=>+e)];  //string->number형변환

/**230114추가_2차원배열로 다시 풀어보기 */

let all = inputData.shift();
//a층의 b호에 살려면 자신의 아래 (a-1)층 1호~b호까지 사람들의 수의 합만큼 데려와 살아야한다.

for(let a=0; a<all; a++){   
    let floor = inputData[2*a]  //6층 inputData[4] = 6
    let unit = inputData[2*a+1] //3호 inputData[5] = 3
    
    let people = new Array();

    for(let i=1; i<=unit; i++)
        people.push(i);         //0층 세팅 

    for(let i=1; i<=floor; i++){ //층 수만큼 반복
        let tmpPeople = new Array(); 
        let sum = 0;                //층 바뀔때마다 초기화

        for(let j=0; j<unit; j++){ //호 수만큼 반복
                sum += people[j];
                tmpPeople.push( sum );
        }
        people = [...tmpPeople];
    }

    console.log(people[people.length-1]);
}
