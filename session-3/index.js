// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

let a = 5;
const b = 10;
let c = a + b;

console.log(15 + c);

a = 20;

console.log(15 + c);

c = a + b; 

console.log(30 + c);

const userName = "Iki";
function sayCiao() {
   console.log("ciao" + userName);
}
function conversation() {
   sayCiao()
   console.log('how are you?')
   console.log('Goodbye')
}
conversation()

function futureAge(name, age) {
   const calculatedAge = age + 5
   return name + calculatedAge
}
console.log(futureAge('Ikraan', 28));
