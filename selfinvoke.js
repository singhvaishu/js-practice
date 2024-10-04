
// function greet(name) {
//     console.log("hellow" + name)

// } greet("vaishu");


// function study(book) {
//     console.log("DSA" + book)
// } study("RD");

// (function (animal) {
//     console.log("Dog" + animal)
// })("hhi");


// (function (club) {
//     console.log("Dilgit" + club)
// })("h2gang");



// (function () {
//     var x = 10
//     console.log(x)
// })();


// (function () {
//     let x = 20
//     console.log(x)
// })();


//call

// function sayhellow(greeting) {
//     console.log(greeting + ' ' + this.name)
// }
// const person = { name: 'john' };
// sayhellow.call(person, 'hellow');


// function gender(men) {
//     console.log(men + ' ' + this.name)
// }
// const identity = { name: 'Ram' }
// gender.call(identity, 'hellow');



// Apply


// function sayhellow(greeting) {
//     console.log(greeting + "" + this.name);
// }
// const person1 = ({ name: "Abhi" });
// sayhellow.apply(person1, ['hellow']);


// function gender(men) {
//     console.log(men + " " + this.categori);
// }
// const identity1 = ({ categori: "purush" });
// gender.apply(identity1, ["Hey"])


//bind

function sayhellow(greeting) {
    console.log(greeting + " " + this.name);
}
const person = ({ name: "john" });
const sayhellowjohn = sayhellow.bind(person);
sayhellowjohn("hhhh");



function gender(men) {
    console.log(men + " " + this.categori);
}
const identity2 = { categori: "purush" };
const genderpurush = gender.bind(identity2);
genderpurush("hey");