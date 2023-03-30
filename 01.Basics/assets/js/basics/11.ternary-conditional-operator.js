let dayOfTheWeek= 6
let hour=12

// Days of the weekend; Sunday: 0 and Saturday: 6
// We open at 9 except the days of the weekend that we open at 11
openingTime = ([0,6].includes(dayOfTheWeek))?11:9
let message = hour<openingTime?`It's close. Today we open at ${openingTime}`:`It´s open`

console.log({openingTime, message});

const theBigger = (a,b)=> (a>b) ? a : b;
console.log( theBigger(1231,1213) );

const isAFollower = (user) => (user) ? `he/she has whatched your videos` : `he/she hasn't whatched your videos`

console.log(isAFollower(true));

const mark = 99; // A+, A, B+
const grade =   mark >= 95 ? 'A+' :
                mark >= 90 ? 'A'  :
                mark >= 85 ? 'B'  :
                mark >= 80 ? 'B+' :
                mark >= 75 ? 'C'  :
                mark >= 70 ? 'C+' : 'F';
console.log(grade);









