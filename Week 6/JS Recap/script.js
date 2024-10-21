// Very basic JavaScript example
document.getElementById("helloWorld").innerHTML = "Hello World<br>";

// Declare greeting and warning variables
let greeting = "Hello there";
let warning = "Be careful";

// Update greeting and warning strings
greeting = "\"Hello there\" is a greeting";
warning = "'Be careful' is a warning";

// Write string variables to document
document.getElementById("stringVariable1").innerHTML = greeting;
document.getElementById("stringVariable2").innerHTML = warning;

// Check if oldstring is defined before using it
let oldstring = "This is an old string";
let newstring = oldstring;

document.getElementById("oldString").innerHTML = newstring;

// Arrays
toys = ['bat', 'ball', 'whistle', 'puzzle', 'doll']

top = ['R', 'G', 'Y']
mid = ['W', 'R', 'O']
bot = ['Y', 'W', 'G']

face = [top, mid, bot]
document.getElementById("array").innerHTML = (face[1][2]);

// Status div
const statusMessage = "All systems are working";
document.write("<div>" + statusMessage + "</div>");

// Arithmetic Operators
let a = 10, b = 3;
let arithmetic = "Addition: " + (a + b) + "<br>" +
    "Subtraction: " + (a - b) + "<br>" +
    "Multiplication: " + (a * b) + "<br>" +
    "Division: " + (a / b) + "<br>" +
    "Modulus: " + (a % b) + "<br>" +
    "Exponentiation: " + (a ** b) + "<br>";
document.getElementById("arithmetic").innerHTML = arithmetic;

// Comparison Operators
let comparison = "Is a greater than b? " + (a > b) + "<br>" +
    "Is a less than b? " + (a < b) + "<br>" +
    "Is a equal to b? " + (a == b) + "<br>" +
    "Is a not equal to b? " + (a != b) + "<br>" +
    "Is a exactly equal to b (type check)? " + (a === b) + "<br>";
document.getElementById("comparison").innerHTML = comparison;

// Logical Operators
let logical = "AND: (a > 5 && b < 5) -> " + (a > 5 && b < 5) + "<br>" +
    "OR: (a > 5 || b > 5) -> " + (a > 5 || b > 5) + "<br>" +
    "NOT: !(a > 5) -> " + !(a > 5) + "<br>";
document.getElementById("logical").innerHTML = logical;

// Assignment Operators
let x = 5;
let assignment = "Initial Value: " + x + "<br>";
x += 2;
assignment += "After x += 2: " + x + "<br>";
x -= 3;
assignment += "After x -= 3: " + x + "<br>";
x *= 2;
assignment += "After x *= 2: " + x + "<br>";
x /= 2;
assignment += "After x /= 2: " + x + "<br>";
x %= 2;
assignment += "After x %= 2: " + x + "<br>";
document.getElementById("assignment").innerHTML = assignment;

// String Operators
let str1 = "Hello", str2 = "World";
let string = "Concatenation: " + (str1 + " " + str2) + "<br>";
document.getElementById("string").innerHTML = string;

// Conditional (Ternary) Operator
let age = 20;
let ternary = "Age is " + age + ": " + (age >= 18 ? "Adult" : "Minor") + "<br>";
document.getElementById("ternary").innerHTML = ternary;

// Variable Scope and Functions
test();

let output = "";

if (typeof a != 'undefined') output += 'a = "' + a + '"<br>';
if (typeof b != 'undefined') output += 'b = "' + b + '"<br>';
if (typeof c != 'undefined') output += 'c = "' + c + '"<br>';

function test() {
    a = 123;
    var b = 456;

    if (a == 123) var c = 789;
}

document.getElementById("scope").innerHTML = output;

// Reading URL link with JS
var url = document.getElementById('mylink').href;
document.getElementById('url').innerHTML = 'The URL is ' + url;