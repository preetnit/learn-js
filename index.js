console.log("Hello from script");

let name = "preet"
console.log(name);

let age = 10;
console.log(age);

let person = {
    name : "Preet",
    age : 10
};
console.log(person);
console.log(person.name);
console.log(person['name']);

let selectedColour = ['red', 'orange'];
console.log(selectedColour);
console.log(selectedColour[0]);

selectedColour[2] = 1
console.log(selectedColour);

//perform a task
function greet(name) {
    console.log('Hello '+ name);
}

greet('Preet');
greet(person.name);

// Calculates a value
function square(num) {
    return num*num
}

console.log(square(100));