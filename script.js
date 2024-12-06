// console.log("Jashan Mago");
// console.log(typeof "Jashan Mago");
// console.log(typeof (69+1));
// console.log(typeof Boolean);
// console.log(typeof [0,1]);

// ## Strings

const love = "Science";

// console.log(love.length) -> 7 for "Science"
// console.log(love.indexOf("ie")) -> 2 (it starts at index 2)
// console.log(love.lastIndexOf("en"));
// console.log(love.slice(2,4)) ** 4 is exclusive
// console.log(love.split("i", 1)) -> 21st element of periodic table
// console.log(love.includes("ci", 3))

// ## Numbers

const favNumber = 18;
// console.log(typeof favNumber); -> NOT INTEGER

// const float = 6.9;
// console.log(typeof favNumber == typeof float)

const favFloat = 18.0;
// console.log(favNumber === favFloat) -> true, with == as well as ===
// console.log(favNumber=="18") TRUE!!
// console.log(favNumber==="18") -> false
// console.log(favFloat=="18") -> true
const myString = "18";
// console.log(myString + 1); -> 181 -> Concatenation happens
// console.log(Number(myString) + 1) -> 19
// console.log(Number("Jashan")) -> NaN -> Not a Number
// console.log(Number(true)) -> 1

// Number Methods

// The Number.islnteger() method determines whether the passed value is an integer.
// The Number. parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
// The Number. parseInt() method parses an argument and returns an integer.
// The .toString() method returns a string representing the number

// console.log(Number.isNaN("Jashan")) -> FALSE!? JS SUCKS!
// console.log(Number.isNaN(Number("Jashan"))) -> true

// console.log(isNaN("Jashan")) -> true!

// ## Math Methods and Properties

// console.log(Math.PI); -> 3.141592653589793
// console.log(Math.trunc(Math.PI)); -> 3
// console.log(Math.round(Math.PI)) -> 3
// console.log(Math.ceil(Math.PI)) -> 4 (ceiling)
// console.log(Math.floor(3.99999)) -> 3
// console.log(Math.pow(2,4)) -> 2 raised to the power of 4 -> 16
// console.log(Math.random()) -> random Number, from 0 to 1, including 0, excluding 1
// console.log(Math.floor(Math.random() * 10) + 1)