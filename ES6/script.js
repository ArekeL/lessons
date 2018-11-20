// Lecture: let and const

//ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

// ES5
/*
function driversLicence5(passedTest) {

  if (passedTest) {
    console.log(firsteName);
    var firsteName = 'John';
    var yearOfBirth = 1990;

}
  console.log(firsteName + ' bonr in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6

function driversLicence6(passedTest) {

  //.log(firstName);
  let firsteName;
  const yearOfBirth = 1990;
    if (passedTest) {
      firsteName = 'John';

}
console.log(firsteName + ' bonr in ' + yearOfBirth + ' is now officially allowed to drive a car.');

}

driversLicence6(true);



let i = 22;

for (let i = 0; i < 5; i++ ) {
  console.log(i);
};

console.log(i);
*/




////////////////////////////////////////
// lecture:

//ES6
/*
{
  const a = 1;
  let b = 2;
  var c = 3;
}

//console.log(a + b);
console.log(c);
// ES5
(function () {
  var c = 3;
})();

//console.log(c);
*/


///////////////////////////////////
//Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old. `);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/

//////////////////////////////////
// Lecture: Arrow functions
/*
const years =  [1990, 1965, 1982,1937];

//ES5
var ages5 = years.map(function(el){
  return 2016 - el;
});
console.log(ages5);

// ES6

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

 ages6 = years.map((el, index) => `Age element ${index +1}: ${2016 - el}.`);
 console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new
  Date().getFullYear();
  const age = now - el;
  return `Age element ${index +1}: ${age}.`;
});
console.log(ages6);
*/

///////////////////////////////////////////////////////
// Lecture: Arrow functions 2

//ES5
/*
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {

    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);

    });
  }
};
*/
// box5.clickMe();



//ES6
/*
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {

    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);

    });
  }
};
box6.clickMe();
*/
/*
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {

    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);

    });
  }
};
box66.clickMe();
*/


//function Person(name) {
  //this.name = name;
//}

// ES5
/*
Person.prototype.myFriends5 = function(friends) {

  var arr = friends.map(function (el) {

      return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
};


var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/


// ES 6
/*
Person.prototype.myFriends6 = function(friends) {

  let arr = friends.map((el) => `${this.name} is friends with  ${el}`);

  console.log(arr);
};


let friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);
*/

/////////////////////////////////////////////////////
// Lecture: Destructuring

// ES5

//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj ={
  firstName: 'John',
  lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
  const age2 = new Date().getFullYear() - year;
  return [age2, 65 - age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);