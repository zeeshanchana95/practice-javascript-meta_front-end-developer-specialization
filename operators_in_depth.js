/*logical AND Operator: &&
console.log(true && true) will output: true 
console.log(true && false) will output: false 
console.log(false && true) will output: false 
console.log(false && false) will output: false
*/

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17); //console.log(true && true); ==> true


/*
The logical OR operator in JavaScript: ||
console.log(true || true) will output: true 
console.log(true || false) will output: true  
console.log(false || true) will output: true  
console.log(false || false) will output: false
*/
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17); //console.log(true || false); ==> true


/**
 * The logical NOT operator: !
 * 
 */
var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry); //petHungry = !petHungry;
console.log(petHungry);

/**
 * The modulus operator: %
 */
console.log(22 % 5); // 2


/**
 * The equality operator, ==
 */
console.log(5 == 5);


/**
 * The strict equality operator, ===
 */
console.log(5 === 5);

/**
 * The inequality operator, !=
 */
console.log(5 != 5);


/**
 * The strict inequality operator, ===
 */
console.log(5 !== "5")

/**
 * Combining two strings using the + operator
 */
var str1 = "inter" + "net" // "internet"
var str2 = "note" + "book" // "notebook"
console.log(str1)
console.log(str2)

var str3 = 365 + " days" // "365 days"
var str4 = 12 + " months" // "12 months"
console.log(str3)
console.log(str4)

/**
 * The addition assignment operator, +=
 */
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9


var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

/**
 * The concatenation assignment operator, +=
 */
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."


/**
 * Operator precedence and associativity
 * There are two kinds: 
left-to-right associativity
right-to-left associativity
 */
var num = 10; // the value on the right is assigned to the variable name on the left
console.log(5 > 4 > 3); // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`


/**
 * OUTPUT:
true
true
Feeding the pet
Pet is hungry:  false
true
2
true
true
false
true
internet
notebook
365 days
12 months
9
9
Once upon a time...
false

 */