var num1 = parseInt(prompt("첫 번째 숫자는? "));
var num2 = parseInt(prompt("두 번째 숫자는? "));
addNumber(num1,num2);

function addNumber(num1,num2){
    var sum = num1 + num2;
    alert(sum);
}