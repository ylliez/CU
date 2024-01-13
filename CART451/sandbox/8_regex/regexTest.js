// let regexOneTest = /ab+c/;
// let regexTwoTest = new Regex('ab+c'); // alternative syntax

// PART 1
// let regexOne = /abc/;
// console.log(regexOne.test("do you know your abc's?"));
// console.log(regexOne.test("slabcraft"));
// console.log(regexOne.test("slab craft"));

// PART 2
// // find specific digit
// let digitEx = /9/;
// console.log(digitEx.test("do you 99 your abc's?"));

// // find digit range
// let digitExTwo = /[0-9]/;
// console.log(digitExTwo.test("do you 99 your abc's?"));

// // find digit range -> FALSE due to specific string, not range
// let digitExThree = /0123456789/;
// console.log(digitExThree.test("do you 99 your abc's?"));

// // find letter range
// let letterEx = /[a-z]/;
// console.log(letterEx.test("do you?"));

// // find letter range -> FALSE due to case
// let letterExTwo = /[a-z]/;
// console.log(letterEx.test("DO YOU"));

// // find letter range case insensitive
// let letterExThree = /[a-z]/i;
// console.log(letterExThree.test("DO YOU"));

// PART 3 - shortcuts
// \d : any digit character
// \D : any not a digit character
// \w : any alphanumeric character
// \W : any not alphanumeric character
// \s : any whitepsace character
// \S : any not whitepsace character

// PART 4 - alternative syntax
// console.log((/\d/).test("abcd"));
// console.log((/\w/).test("abcd"));
// console.log((/\s/).test("abcd"));
// console.log((/\s/).test("abcd "));

// PART 5 - repetitions
// // + --> 1+
// console.log((/[0-9]+/).test("abcd "));
// console.log((/[0-9]+/).test("ab1cd "));
// // * --> 0+ (for optional, don't care how many times it occurs)
// console.log((/[0-9]*/).test("abcd "));
// console.log((/[0-9]*/).test("ab1cd "));
// // ? --> 0 || 1 (for optional, don't care how many times it occurs)
// console.log((/[0-9]?/).test("abcd "));
// console.log((/[0-9]?/).test("ab1cd "));

// console.log((/neighbou?r/).test("neighbour"));
// console.log((/neighbou?r/).test("neighbor"));
// console.log((/neighbou?r/).test("neighbou"));

// console.log((/neighbou*r/).test("neighbour"));
// console.log((/neighbou?r/).test("neighbouur"));
// console.log((/neighbou*r/).test("neighbor"));
// console.log((/neighbou*r/).test("neighbouur"));

// // /\d{2,3}/ --> at least 2 together
// console.log((/\d{2,3}/).test("ab1c1d1"));
// console.log((/\d{2,3}/).test("ab11c1d1"));
// console.log((/\d{2,3}/).test("ab1111c1d1")); // WHY?

// let date_pattern = /\d{1,2}-\d{1,2}-\d{4}/;
// let date_patternTwo = /\d{1,2}:\d{1,2}:\d{4}/;
// console.log(date_pattern.test("ast345dfh"));
// console.log(date_pattern.test("23-12-2004"));
// console.log(date_pattern.test("23:12:2004"));
// console.log(date_patternTwo.test("23:12:2004"));
// console.log(date_patternTwo.test("233:12:2004")); // WHY??
// let date_patternThree = /\d{1,2}?:\d{1,2}:\d{4}/;
// console.log(date_patternThree.test("233:12:2004")); // WHY??

// let boo = /boo+(hoo)+/;
// console.log(boo.test("boohoo"));
// console.log(boo.test("booooooohoo"));
// console.log(boo.test("booooooohooo"));
// console.log(boo.test("booooooobooo"));

// // PART 6 - line start (^) & end ($)
// let start = /^1/;
// let end = /1$/;
// console.log(start.test("21"));
// console.log(start.test("12"));
// console.log(end.test("21"));
// console.log(end.test("12"));

// PART 7 - extra information using exec
// let match = /(\d)+/.exec("123");
// console.log(match);

// PART 8 - choosing
// let fruitCount = /\d+ (apple|pear|orange)/
// console.log(fruitCount.test("2 apples"));
// console.log(fruitCount.test("2 plums"));
// console.log(fruitCount.test("2 applescrab"));

// let fruitCountTwo = /\d+ (apple|pear|orange)s?$/
// console.log(fruitCountTwo.test("2 apples"));
// console.log(fruitCountTwo.test("2 apple"));

// PART 9 - regex & replace
// console.log("todayisWednesday".replace("y", "*"));
// console.log("todayisWednesday".replace(/y/g, "*"));
// console.log("apple pear banana".replace(/(\w+) (\w+)/, "$2 $1"));

// tokenizing - remove punctuation
// let rePun = /[.,;:!@ ]/;
// let splitR1 = ("test has won the day; hi").split(rePun);
// console.log(splitR1);

let rePunTwo = /[.?!]/;
let splitR2 = ("test has won the day. test has won the day. test has won the day.").split(rePunTwo);
console.log(splitR2);