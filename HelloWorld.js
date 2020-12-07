console.log("Hello World!")
console.log("Se alaafia ni ewa gbo gbo aiye")
let greeting = ("Hello World")
console.log (greeting)

let x = 1+1
console.log (x) 

let letter;
letter= ("A, B, C")
console.log(typeof letter)

let p;
p= 70
console.log(typeof p)

const statement = "I want to go to "
const place = "market"
const method = " by car"
console.log(statement+place+method);

let student = 15;
let mentor = 8;
let all =(student + mentor);
console.log("total number is" + " " + all);

// function percentage (s, m)
// We returned the percentage of parameter a and rounded to 1dp.
function percentage (a, b){
    let P=  Math.round(a/(a+b)*1000)/10;
    return "your percentage is " + P + "%";
}
console.log (percentage (5, 10));

function percentage1 (a,b){
    return (a/(a+b)*100).toFixed(1);
}
console.log (percentage1 (5, 10));

function getAgeInDays(age) {
    return age * 365;
  }
  
  function createGreeting(name, age) {
    const ageInDays = getAgeInDays(age);
    const message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
  }
  


















