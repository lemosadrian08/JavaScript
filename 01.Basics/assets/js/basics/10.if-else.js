const date = new Date();
let today = date.getDay(); // 0:Sunday, 1:Monday....


console.log({today});


if (today==0) {
    console.log('Sunday');
} if (today==1) {
    console.log('Monday');
} else {
    console.log('Today is not Sunday, nor Monday');
}
console.log('End program');


const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

console.log(days[today]); 