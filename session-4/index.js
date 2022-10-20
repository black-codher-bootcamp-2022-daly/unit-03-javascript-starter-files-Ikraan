// ****************************************************TASK 1 - OBJECTS****************************************************

const personA = {
    name: 'Ikraan',
    age: '28',
    location:'Birmingham',
    likes:'chocolate'
};
const personB = {
    name: 'Zak',
    age: '26',
    location:'london',
    likes:'gaming'
};
const personC = {
    name: 'Sarah',
    age: '27',
    location: 'Leeds',
    likes: 'swimming'
};
const personD = {
    name: 'Tyson',
    age: '30',
    location:'Manchester',
    likes: 'money'
};


function biography(person) {
    return "Hi my name is " + person.name + " I am " + person.age + " I live in " + person.location + " and I like " + person.likes 
}

console.log(biography(personA));

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);

console.log(addition + multiplication);
console.log(y * division)
console.log(multiplication === subtraction)
console.log(addition * x)
// ****************************************************TASK 3****************************************************

const age = 28;
const minDrivingAge = 18;

const drivingAge = (age > minDrivingAge);
console.log('Am I of legal age to drive? '+ drivingAge);


function addNumbers(x,y) {
    return x + y
}
function subtractNumbers(x,y) {
    return x - y 
}
function multiplyNumbers(x,y) {
    return x * y 
}
function divideNumbers(x,y) {
    return x / y 
}
const calculator = {
    add: addNumbers,
    subtract: subtractNumbers,
    multiply: multiplyNumbers,
    divide: divideNumbers
}

console.log(calculator.add(2,3));
console.log(calculator.subtract(8,5));
console.log(calculator.multiply(5,2));
console.log(calculator.divide(10,5));


// ***********************************************DifferentSection**********************************************

const nameA = {
    age:28,
    name: 'Ikraan'
}
const nameB = {
    age:26,
    name: 'Zak'
}

function whoIsOlder(personA, personB) {
const isAgreaterthanB = personA.age > personB.age;
const ageDifference = personA.age - personB.age;

const aIsOlder = `${personA.name} is ${ageDifference} years older than ${personB.name}`
const bIsOlder = `${personB.name} is ${ageDifference} years older than ${personA.name}`

return `${personA.name} is ${ageDifference} years older than ${personB.name}
`};

console.log(whoIsOlder(nameA, nameB));