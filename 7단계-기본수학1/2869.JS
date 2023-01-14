var filepath = (process.platform === 'win32')?__dirname+'/test.txt':'/dev/stdin';
var inputData = require('fs').readFileSync(filepath).toString().split(' ');
inputData = [...inputData.map(e=>+e)];  //string->number형변환
//A: up, B: down, V: 나무막대

var A = inputData[0]; 
var B = inputData[1];
var V = inputData[2];

var day = 0; //걸린 날짜 

// V = (A-B)*day;
day = (V-B)/(A-B);
console.log(Math.ceil(day));


/**
 * 도착하면 더 못떨어지니까 길이-down한번 해줌  => 한번 더떨어지면 +1일이 되니까
 * 1.딱 맞춰 도착할 때 => down X  (V-B)%(A-B) = 0
 * 2. 더 올라갔을 때 => down X    (V-B)%(A-B) = 0
 * 3. 덜 올라갔을 때 => up한번 더  (V-B)%(A-B) != 0   +1일 
 */

/** 수정 전 => 일케하면 다 돌아야해서 시간초과! 식으로 해야함 
 * 
var A = inputData[0]; 
var B = inputData[1];
var V = inputData[2];

var day = 0; //걸린 날짜 

while(inputData[2] > now){
    now += inputData[0]-inputData[1];
    day++;
}
console.log(day);
 */