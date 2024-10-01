function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: "Charlie" };

const greetCharlie = greet.bind(person, "Hey");
greetCharlie("!"); // Output: "Hey, Charlie!"