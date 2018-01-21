var username=window.prompt("Please enter your name");
var greetingParagraph = document.getElementById('greeting');
greetingParagraph.innerHTML += username;

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));

var span = document.getElementById("Operator 1");
var span1 = document.getElementById("Operator 2");

span.innerHTML = num1;
span1.innerHTML = num2;

var sum=num2+num1;
var diff=num1-num2;
var div=num1/num2;
var mul=num1*num2;
var rem=num1%num2;

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("subtraction").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + diff;
document.getElementById("division").innerHTML = "The division of " + num1 + " and " + num2 + " is " + div;
document.getElementById("multiplication").innerHTML = "The multiplication of " + num1 + " and " + num2 + " is " + mul;
document.getElementById("remainder").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + rem;