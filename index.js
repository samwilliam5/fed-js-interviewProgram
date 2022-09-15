//10 number is ascending order in array
var ascendingnumber = [1000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 100];
numbersAscending = ascendingnumber.sort(function (a, b) {
    return a - b;
});
console.log(`Ascending:`, ...ascendingnumber);


//sum of digit 
let numbers = 398;
let sum = 0;
while (numbers > 0) {
    let rem = numbers % 10;
    sum = sum + rem;
    numbers = parseInt(numbers / 10)
}
console.log(`Sum of digit:`, sum);

function clickhandle() {
    var email = document.querySelector('#emailid').value;
    var password = document.querySelector('#passwordid').value;

    email == 'samwilliamj333@gmail.com' && password == 007 ? alert("sucess") : alert('not valid')
}